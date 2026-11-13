# Gabrielswarft – Website

Statische Website (Astro) für das Ferienhaus Gabrielswarft in Fahretoft. Deutsch unter `/`, Englisch unter `/en/`.

## Wo was steht
- **Texte (DE/EN):** `src/content.ts`
- **Buchungslink, Impressum-Angaben:** `src/site.ts`
- **Farben & Layout:** `src/styles/global.css`
- **Bilder:** `public/img/<name>-800.webp` und `-1600.webp`
- **Rechtliches:** `src/pages/impressum.astro`, `src/pages/datenschutz.astro` (+ EN unter `src/pages/en/`)

## Lokal starten
```
npm install
npm run dev
```

## Veröffentlichen
Repository in Vercel importieren (Framework: Astro, Standardeinstellungen). Danach Domain `gabrielswarft.de` in Vercel unter *Settings → Domains* hinzufügen und die angezeigten DNS-Einträge beim Domain-Anbieter setzen.
