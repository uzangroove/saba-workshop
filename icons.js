/* הסדנה של סבא שמעון · ספריית אייקונים
   כל אייקון: אריח בצבע המדף + סמל בקו דיו אחיד (2.5px).
   מחלקות מילוי: a = צבע המדף, w = לבן, y = צהוב בטיחות, k = דיו, p = ורוד */
const SYM = {
 book:`<path class="w" d="M10 16c6-3 12-3 18 1v24c-6-4-12-4-18-1z"/><path class="a" d="M46 16c-6-3-12-3-18 1v24c6-4 12-4 18-1z"/><path class="y" d="M37 21l1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z"/>`,
 server:`<rect class="a" x="12" y="11" width="32" height="13" rx="3"/><rect class="w" x="12" y="28" width="32" height="13" rx="3"/><circle class="y" cx="18" cy="17.5" r="2"/><circle class="y" cx="18" cy="34.5" r="2"/><path d="M26 17.5h12M26 34.5h12M28 41v5h-6"/>`,
 castle:`<path class="a" d="M12 46V22h6v5h5v-5h10v5h5v-5h6v24z"/><path class="w" d="M24 46v-8a4 4 0 0 1 8 0v8z"/><path d="M28 22V9"/><path class="y" d="M28 9l9 3-9 3z"/>`,
 cube:`<path class="a" d="M28 9l17 9v20l-17 9-17-9V18z"/><path class="w" d="M11 18l17 9 17-9-17-9z"/><path d="M28 27v20"/>`,
 mountain:`<path class="a" d="M6 44l15-25 9 14 5-7 15 18z"/><path class="w" d="M21 19l-5 8 5-2 4 3z"/><circle class="y" cx="42" cy="14" r="5"/>`,
 frame:`<rect class="y" x="9" y="10" width="38" height="36" rx="3"/><rect class="w" x="15" y="16" width="26" height="24"/><path class="a" d="M15 40l8-10 6 6 4-4 8 8z"/><circle class="a" cx="34" cy="22" r="3"/>`,
 brush:`<path class="w" d="M38 9l9 9-16 16-9-9z"/><path class="a" d="M22 25l9 9-4 4c-3 3-8 4-14 3 2-3 1-7 4-10z"/><path d="M33 14l9 9"/>`,
 wand:`<path class="k" d="M12 44l20-20 3 3-20 20z"/><path class="y" d="M38 8l2.4 5 5.6.8-4 3.9 1 5.5-5-2.6-5 2.6 1-5.5-4-3.9 5.6-.8z"/><path d="M24 12v4M20 14h8M46 30v4M44 32h4"/>`,
 pin:`<path class="a" d="M28 47s-14-14-14-24a14 14 0 0 1 28 0c0 10-14 24-14 24z"/><circle class="w" cx="28" cy="23" r="5.5"/>`,
 camera:`<path class="a" d="M8 20h9l3-5h16l3 5h9v22H8z"/><circle class="w" cx="28" cy="31" r="8"/><circle class="k" cx="28" cy="31" r="3"/><rect class="y" x="38" y="23" width="5" height="3" rx="1"/>`,
 books:`<rect class="a" x="10" y="12" width="9" height="33" rx="1.5"/><rect class="y" x="19" y="16" width="9" height="29" rx="1.5"/><path class="w" d="M30 17.5l8.5-2.3 7.8 29-8.6 2.3z"/><path d="M13 20h3M22 23h3"/>`,
 moon:`<path class="y" d="M36 9a19 19 0 1 0 12 26A15 15 0 0 1 36 9z"/><path class="w" d="M15 13l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z"/>`,
 ball:`<circle class="a" cx="26" cy="30" r="15"/><path d="M11 30c8-4 22-4 30 0M26 15c-5 8-5 22 0 30"/><path d="M40 12l6-4M42 18l7-1" stroke-dasharray="2 3"/>`,
 banana:`<path class="y" d="M12 14c2 16 12 28 30 28 3 0 4-3 1-4-14-3-21-13-24-25-1-3-7-3-7 1z"/><path class="k" d="M10 11l4 3-1 2-4-3z"/>`,
 clock:`<circle class="w" cx="28" cy="28" r="17"/><circle class="a" cx="28" cy="28" r="17" style="fill:none"/><path d="M28 18v10l7 5"/><circle class="k" cx="28" cy="28" r="2"/><path d="M28 11v3M28 42v3M11 28h3M42 28h3"/>`,
 repo:`<path class="a" d="M8 17v26h40V19H27l-4-5H11a3 3 0 0 0-3 3z"/><path class="w" d="M21 27l-5 5 5 5M35 27l5 5-5 5M30 25l-4 14" style="fill:none;stroke:#fff"/>`,
 joystick:`<rect class="a" x="9" y="30" width="38" height="14" rx="5"/><path d="M28 30V17"/><circle class="y" cx="28" cy="14" r="6"/><circle class="w" cx="17" cy="37" r="2.5"/><circle class="w" cx="39" cy="37" r="2.5"/>`,
 wave:`<rect class="w" x="9" y="11" width="38" height="34" rx="6"/><path d="M14 28h4l3-9 5 18 5-14 3 8 3-3h5"/><circle class="y" cx="41" cy="16" r="2.5"/>`,
 drum:`<ellipse class="w" cx="28" cy="20" rx="17" ry="6"/><path class="a" d="M11 20v16c0 3.3 7.6 6 17 6s17-2.7 17-6V20c0 3.3-7.6 6-17 6s-17-2.7-17-6z"/><path d="M36 6l-6 13M42 9l-9 11"/><path d="M15 31l6 7M27 33l2 8M39 30l-4 8"/>`,
 type:`<rect class="w" x="8" y="12" width="40" height="32" rx="4"/><path class="a" d="M14 20h18v4H14z"/><path d="M14 30h28M14 36h18"/><path class="y" d="M38 33l6 3-6 3z"/>`,
 slides:`<rect class="w" x="8" y="10" width="40" height="27" rx="3"/><path class="a" d="M14 31l8-9 5 5 4-4 9 8z"/><path d="M28 37v8M20 46h16"/>`,
 sliders:`<rect class="w" x="9" y="9" width="38" height="38" rx="6"/><path d="M18 15v26M28 15v26M38 15v26"/><rect class="a" x="14" y="30" width="8" height="5" rx="2"/><rect class="y" x="24" y="19" width="8" height="5" rx="2"/><rect class="a" x="34" y="25" width="8" height="5" rx="2"/>`,
 plane:`<path class="w" d="M6 30l6-2 32-8c4-1 6 3 2 5l-12 6-6 12-4 1 2-10-12 3-3 4-3 1 2-7z"/><path class="a" d="M24 22l-6-9 4-1 12 6z"/>`,
 caliper:`<path class="y" d="M8 14h40v8H8z"/><path class="a" d="M10 22h6v20l-6-6zM30 22h6v14l-6 6z"/><path d="M14 14v4M20 14v4M26 14v4M32 14v4M38 14v4M44 14v4"/>`,
 factory:`<path class="a" d="M8 46V26l10-6v6l10-6v6l10-6v26z"/><path class="w" d="M38 46V10h8v36z"/><rect class="y" x="13" y="34" width="5" height="5"/><rect class="y" x="24" y="34" width="5" height="5"/><path d="M40 6c2-2 5-2 6 0"/>`,
 chat:`<path class="a" d="M8 12h28v18H20l-7 6v-6H8z"/><path class="w" d="M22 26h26v16h-5v5l-6-5H22z"/><path d="M14 19h16M14 24h10M27 33h15M27 37h10"/>`,
 clipboard:`<rect class="w" x="12" y="11" width="32" height="37" rx="3"/><rect class="a" x="20" y="7" width="16" height="8" rx="2"/><path d="M18 24l3 3 5-6M18 35l3 3 5-6M30 25h8M30 36h8"/>`,
 chart:`<rect class="w" x="9" y="9" width="38" height="38" rx="4"/><rect class="a" x="15" y="30" width="6" height="11"/><rect class="y" x="25" y="22" width="6" height="19"/><rect class="a" x="35" y="15" width="6" height="26"/>`,
 bulb:`<path class="y" d="M28 8a14 14 0 0 0-8 25.5V38h16v-4.5A14 14 0 0 0 28 8z"/><path class="w" d="M21 38h14v4a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3z"/><path d="M24 26l4 4 4-4M28 30v8"/>`,
 brain:`<path class="p" d="M27 10c-4-2-9 0-10 4-5 0-8 5-6 9-3 3-2 8 1 10 0 5 5 8 9 6 2 3 6 3 6 0z"/><path class="a" d="M29 10c4-2 9 0 10 4 5 0 8 5 6 9 3 3 2 8-1 10 0 5-5 8-9 6-2 3-6 3-6 0z"/><path d="M28 9v31M17 22c3 0 5 2 5 5M39 22c-3 0-5 2-5 5"/>`,
 network:`<path d="M14 16l14 12 14-12M14 40l14-12 14 12M14 16v24M42 16v24"/><circle class="a" cx="14" cy="16" r="5"/><circle class="a" cx="14" cy="40" r="5"/><circle class="y" cx="28" cy="28" r="6"/><circle class="w" cx="42" cy="16" r="5"/><circle class="w" cx="42" cy="40" r="5"/>`,
 search:`<circle class="w" cx="24" cy="24" r="13"/><path class="a" d="M33 33l12 12-3 3-12-12z"/><path d="M18 20a7 7 0 0 1 7-4"/>`,
 briefcase:`<rect class="a" x="8" y="18" width="40" height="27" rx="4"/><path class="w" d="M21 18v-5h14v5"/><path d="M8 29h40"/><rect class="y" x="24" y="26" width="8" height="6" rx="1"/>`,
 bag:`<path class="a" d="M11 19h34l-3 28H14z"/><path d="M21 23v-7a7 7 0 0 1 14 0v7" style="fill:none"/><path class="w" d="M24 32c3-4 8-1 4 4l-2 2-2-2c-4-5 1-8 4-4" style="fill:#fff"/>`,
 calculator:`<rect class="w" x="13" y="7" width="30" height="42" rx="4"/><rect class="a" x="18" y="12" width="20" height="9" rx="1.5"/><g class="k"><circle cx="21" cy="28" r="2"/><circle cx="28" cy="28" r="2"/><circle cx="35" cy="28" r="2"/><circle cx="21" cy="35" r="2"/><circle cx="28" cy="35" r="2"/><circle cx="21" cy="42" r="2"/><circle cx="28" cy="42" r="2"/></g><rect class="y" x="33" y="33" width="4" height="11" rx="2"/>`,
 box:`<path class="a" d="M8 20l20-9 20 9v22l-20 7-20-7z"/><path class="y" d="M8 20l20 8 20-8-20-9z"/><path d="M28 28v21"/><path class="w" d="M17 16l20 8v6l-4 1v-5l-20-8z"/>`,
 tiles:`<rect class="a" x="9" y="9" width="18" height="18" rx="2"/><rect class="w" x="29" y="9" width="18" height="18" rx="2"/><rect class="w" x="9" y="29" width="18" height="18" rx="2"/><rect class="y" x="29" y="29" width="18" height="18" rx="2"/><path d="M13 18h10M33 38h10" stroke-dasharray="2 2"/>`,
 truck:`<path class="a" d="M6 16h28v22H6z"/><path class="w" d="M34 22h8l7 8v8H34z"/><circle class="w" cx="15" cy="40" r="5"/><circle class="w" cx="41" cy="40" r="5"/><path class="y" d="M12 24h12v6H12z"/>`,
 note:`<path class="k" d="M22 12l22-5v29"/><path d="M22 12v28"/><ellipse class="a" cx="16" cy="40" rx="7" ry="5.5"/><ellipse class="y" cx="38" cy="36" rx="7" ry="5.5"/><path d="M22 18l22-5"/>`,
 key:`<circle class="y" cx="18" cy="22" r="10"/><circle class="w" cx="15" cy="19" r="3"/><path class="a" d="M25 28l18 18-4 4-3-3-3 3-3-3 3-3-11-11z"/>`,
 speaker:`<path class="a" d="M10 22h8l12-9v30l-12-9h-8z"/><path d="M36 21c3 3 3 11 0 14M41 16c6 6 6 18 0 24"/>`,
 flask:`<path class="w" d="M22 8h12M24 8v14L11 43c-1 2 0 4 3 4h28c3 0 4-2 3-4L32 22V8"/><path class="a" d="M17 34h22l6 9c1 2 0 4-3 4H14c-3 0-4-2-3-4z"/><circle class="y" cx="25" cy="40" r="2"/><circle class="w" cx="33" cy="38" r="1.5"/>`,
 window:`<rect class="w" x="7" y="10" width="42" height="36" rx="4"/><path class="a" d="M7 14a4 4 0 0 1 4-4h34a4 4 0 0 1 4 4v5H7z"/><path d="M12 28h14M12 34h20M12 40h10"/><rect class="y" x="33" y="27" width="11" height="13" rx="2"/>`,
 doc:`<path class="w" d="M13 7h21l9 9v33H13z"/><path class="a" d="M34 7v9h9z"/><path d="M19 22h18M19 28h18M19 34h18M19 40h11"/>`,
 expand:`<rect class="a" x="18" y="18" width="20" height="20" rx="2"/><path d="M8 18V8h10M48 18V8H38M8 38v10h10M48 38v10H38"/><path class="y" d="M24 32l4-6 4 6z"/>`
};

function symbolIcon(name, color){
  const s = SYM[name] || SYM.box;
  return `<svg viewBox="0 0 56 56" class="sym" style="--c:${color}"><rect width="56" height="56" class="tile"/><g fill="none" stroke="#16324A" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round">${s}</g></svg>`;
}
