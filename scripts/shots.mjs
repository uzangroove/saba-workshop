// מצלם כל יישום אינטרנטי מ-apps.json: צילום מסך + קליפ הצצה קצר.
// רץ ב-GitHub Actions (קובץ .github/workflows/shots.yml). אפשר גם להריץ ידנית: node scripts/shots.mjs
import { chromium } from 'playwright';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('apps.json', 'utf8'));
const SKIP = /claude\.ai\/|ai\.studio\/apps\/|chatgpt\.site/;            // דפים שדורשים התחברות
const only = process.argv[2] ? new Set(process.argv[2].split(',')) : null;
fs.mkdirSync('shots', { recursive: true });
fs.mkdirSync('clips', { recursive: true });
fs.mkdirSync('tmpvid', { recursive: true });
const prev = fs.existsSync('shots/index.json') ? JSON.parse(fs.readFileSync('shots/index.json', 'utf8')) : {};
const out = {};

const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
for (const a of data.apps) {
  if (a.launch?.type !== 'web' || SKIP.test(a.launch.url)) continue;
  if (only && !only.has(a.id)) { if (prev[a.id]) out[a.id] = prev[a.id]; continue; }
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 800 }, locale: 'he-IL',
    recordVideo: { dir: 'tmpvid', size: { width: 640, height: 400 } },
  });
  const t0 = Date.now();
  try {
    const page = await ctx.newPage();
    await page.goto(a.launch.url, { waitUntil: 'load', timeout: 30000 });
    await page.waitForLoadState('networkidle', { timeout: 8000 }).catch(() => {});
    await page.waitForTimeout(a.wait || 2000);
    const settled = (Date.now() - t0) / 1000;
    await page.screenshot({ path: `tmpvid/${a.id}.png` });
    for (let i = 0; i < 6; i++) { await page.mouse.wheel(0, 260); await page.waitForTimeout(450); }
    await page.mouse.wheel(0, -2000); await page.waitForTimeout(700);
    const video = page.video();
    await ctx.close();
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', `tmpvid/${a.id}.png`, '-vf', 'scale=640:-2', '-q:v', '5', `shots/${a.id}.jpg`]);
    out[a.id] = { shot: `shots/${a.id}.jpg`, url: a.launch.url, at: new Date().toISOString().slice(0, 10) };
    try {
      const vpath = `tmpvid/${a.id}.webm`;
      await video.saveAs(vpath);
      execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', String(Math.max(0, settled - 0.5)), '-i', vpath, '-t', '5',
        '-vf', 'scale=480:-2,fps=15', '-an', '-c:v', 'libvpx-vp9', '-b:v', '220k', '-deadline', 'good', `clips/${a.id}.webm`]);
      out[a.id].clip = `clips/${a.id}.webm`;
    } catch (e) { console.log('  (בלי קליפ)', e.message.split('\n')[0]); }
    console.log('✔', a.id, a.name);
  } catch (e) {
    await ctx.close().catch(() => {});
    if (prev[a.id]) out[a.id] = prev[a.id];
    console.log('✘', a.id, a.name, '-', e.message.split('\n')[0]);
  }
}
await browser.close();
fs.rmSync('tmpvid', { recursive: true, force: true });
fs.writeFileSync('shots/index.json', JSON.stringify(out, null, 1));
console.log(`נשמרו ${Object.keys(out).length} צילומים`);
