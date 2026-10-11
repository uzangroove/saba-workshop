# הסדנה של סבא שמעון

קטלוג כל היישומים של שמעון אוזן (IMAGINA). האתר קורא את `apps.json` ומציג כל יישום ככרטיס על מדף.

## איך מעדכנים
עורכים את `apps.json` (ישר באתר של GitHub, או מבקשים מ-Claude). כל שמירה עולה לאתר אוטומטית.

## מבנה שורה ב-apps.json
- `id` מספר פריט (K-13)
- `shelf` המדף: kids, music, ind, ai, others, tools, lab, library, notmine
- `name`, `one` שם ומשפט תיאור
- `status` ok / lab / retired / fog
- `launch` דרך ההפעלה:
  - `{"type":"web","url":"..."}` כפתור "הפעל!"
  - `{"type":"local","path":"...","how":"נתיב|פקודה|קובץ"}` כפתור "העתק"
  - `{"type":"none"}` מציג "פתח ב..." לקישור הראשון
- `links` כל המקומות שבהם היישום גר: `{"t":"nf|gh|ar|dr|pc|cf|pwa|web","u":"כתובת","s":"תווית"}`
- `public` האם להציג בגרסה הציבורית (בעתיד)
