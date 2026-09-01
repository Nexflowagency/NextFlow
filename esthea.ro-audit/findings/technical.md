# Technical SEO — esthea.ro

Score: **72/100**

## Ce funcționează
- `robots.txt` corect, permisiv, cu referință la sitemap
- `sitemap.xml` valid, toate cele 6 pagini listate, cu `changefreq` și `priority`
- Canonical self-referențial pe fiecare pagină, absolut și corect
- HTTPS cu HSTS (`max-age=31536000`)
- `www.esthea.ro` → `esthea.ro` prin 301; `http://` → `https://` corect
- URL inexistent returnează 404 real (nu soft-404)
- `<html lang="ro">` prezent peste tot
- Viewport corect, cu `viewport-fit=cover`
- `meta robots: index, follow, max-image-preview:large` — corect pentru un site care vrea imagini mari în SERP

## Probleme

### [Critical] Cache-control anulează tot cache-ul pe 537 de fișiere statice
Toate resursele — inclusiv cele 537 de cadre JPEG — sunt servite cu:
```
cache-control: public,max-age=0,must-revalidate
```
Fiecare vizitator revalidează fiecare cadru la fiecare vizită. E default-ul Netlify
pentru fișiere fără hash în nume. Pe un site cu 22 MB de cadre, asta înseamnă că
vizita a doua e aproape la fel de scumpă ca prima.

**Fix** — `netlify.toml`:
```toml
[[headers]]
  for = "/frames/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```
CSS/JS au deja `?v=` în query string, deci pot primi același tratament.

### [Low] Lipsește `llms.txt`
Returnează 404. Nu e un factor de ranking Google, dar e standardul emergent prin
care motoarele AI înțeleg structura site-ului. Ieftin de adăugat.
