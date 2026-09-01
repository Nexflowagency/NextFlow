# Plan de acțiune — esthea.ro

Ordonat după raport impact/efort, nu după categorie.

## Faza 1 — Săptămâna 1 (fix-uri critice, ~3 ore total)

| # | Acțiune | Efort | De ce |
|---|---|---|---|
| 1 | Adaugă `<h1>` pe homepage | 5 min | Pagina principală nu are niciun H1 |
| 2 | Repară `cache-control` în `netlify.toml` pentru `/frames/*` și `/assets/*` | 15 min | 537 de fișiere se re-descarcă la fiecare vizită |
| 3 | Fă absolute URL-urile `image` din JSON-LD | 10 min | Google ignoră acum proprietatea |
| 4 | Adaugă `width`/`height` pe cele 6 imagini | 20 min | Elimină layout shift, câștig direct CLS |
| 5 | Adaugă schema `BeautySalon` pe /contact.html | 20 min | Pagina cea mai importantă pentru local SEO nu are markup |
| 6 | Unifică entitatea prin `"@id": "https://esthea.ro/#business"` | 20 min | Google vede acum două afaceri diferite |
| 7 | Scurtează meta description homepage la ≤160 caractere | 5 min | Se taie în SERP |

## Faza 2 — Săptămânile 2-3 (performanță)

| # | Acțiune | Efort | Câștig |
|---|---|---|---|
| 8 | Convertește cadrele la AVIF | 2-3 h | −50…70% din 22 MB |
| 9 | Redu secvențele de la 179 la ~60 de cadre | 2 h | Încă −65%, fără pierdere vizibilă |
| 10 | Pe mobil, încarcă doar secvența `hero`; `room` și `serum` → imagine statică | 2 h | ~−16 MB pe mobil |
| 11 | Comprimă `owner.jpg` (458 KB → sub 80 KB WebP) | 15 min | Imagine unică, cea mai grea |
| 12 | Self-hostează Lenis în loc de unpkg | 20 min | Scoate un third-party de pe calea critică |

> Fazele 1 și 2 rezolvă tot ce ține de infrastructură. După ele, site-ul e sănătos
> tehnic — dar tot nu are motive să apară în căutări noi. Aceea e Faza 3.

## Faza 3 — Luna 2 (conținut — aici se câștigă trafic)

| # | Acțiune | Efort |
|---|---|---|
| 13 | Pagină „Despre Doina": formare, certificări, ani de practică, abordare (400-600 cuvinte) + `Person` schema | 3 h |
| 14 | Secțiune FAQ pe /servicii.html + `FAQPage` schema (8-10 întrebări reale de la cliente) | 3 h |
| 15 | Pagini dedicate pentru cele 4 tratamente scumpe: Exozomi (700), Microneedling (420), Glass Skin Infusion (420), Hydra Glow (350) | 8 h |
| 16 | Adaugă în textul vizibil: durata fiecărui tratament, intervalul de repetare, tipul de ten potrivit | 2 h |
| 17 | Linkuri interne contextuale din corpul textului către /servicii.html | 1 h |

Întrebările pentru FAQ trebuie să vină din ce întreabă clientele la telefon, nu dintr-un
tool de keywords. Acelea sunt exact interogările pe care le fac și în Google.

## Faza 4 — Continuu

| # | Acțiune |
|---|---|
| 18 | Revendică și completează Google Business Profile — sursa reală a stelelor din SERP |
| 19 | Extinde `sameAs` cu GBP, Facebook și directoare locale (med.ro, directoare Bacău) |
| 20 | Adaugă `llms.txt` |
| 21 | Verifică lunar în Search Console indexarea celor 6+ pagini |
| 22 | Rulează `seo-drift` înainte și după fiecare deploy ca să prinzi regresiile |

## Ce NU merită făcut

- **Nu scoate markup-ul de recenzii** de pe /recenzii.html chiar dacă nu produce stele —
  ajută la înțelegerea entității.
- **Nu renunța la efectul scroll-cinematic.** E diferențiatorul vizual al site-ului și
  motivul pentru care arată scump. Problema e greutatea, nu conceptul — și greutatea
  se rezolvă cu AVIF plus mai puține cadre.
- **Nu adăuga un blog generic** cu articole scrise pentru volume de căutare. Pentru un
  cabinet cu programări limitate, 4 pagini de tratament bine făcute bat 40 de articole.
