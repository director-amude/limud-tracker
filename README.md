# לוח לימוד v3 – Torah Tracker

PWA bilingüe (Español / עברית) para seguimiento de:
- **תנ״ך** — todos los libros con perakim individuales  
- **משנה** — 6 Sedarim completos, perek por perek, mishná por mishná
- **גמרא** — Todo el Shas Bavli, amud por amud (א/ב) estilo Amudé HaOlam
- **שו״ע** — 4 Jelkim con simanim individuales

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | App completa |
| `data.js` | Todos los datos (Shas, Mishnah, Tanach, Shulchan Aruch) |
| `manifest.json` | Config PWA |
| `sw.js` | Service Worker (offline) |

## Subir a GitHub Pages

1. Crea un repo en github.com (nombre: `torah-tracker` o el que quieras)
2. Sube los 4 archivos: `index.html`, `data.js`, `manifest.json`, `sw.js`
3. Settings → Pages → Source: Deploy from branch → main → Save
4. En ~2 min queda en: `https://TU-USUARIO.github.io/NOMBRE-REPO`

## Instalar en celular

**Android (Chrome):** Banner automático → "Instalar" / o menú ⋮ → "Añadir a pantalla de inicio"

**iPhone (Safari):** Compartir → "Añadir a pantalla de inicio"

## Cómo usar el tracker

- **Toca una vez** → marcar como Estudiado (azul)
- **Toca de nuevo** → marcar como Repasado (verde)  
- **Toca una vez más** → desmarcar
- **Mantén presionado** → menú con opciones: Estudio / Repaso / Jazar / Desmarcar
- Los datos se guardan automáticamente en el celular (localStorage)
- Funciona sin internet
