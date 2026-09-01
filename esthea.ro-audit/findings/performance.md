# Performance — esthea.ro

Score: **25/100** — categoria cea mai slabă, de departe.

## Problema dominantă: ~22 MB de cadre pe homepage

Homepage-ul rulează **trei** secvențe scroll-cinematic, fiecare de 179 de cadre JPEG:

| Secvență | Cadre | Medie/cadru | Total estimat |
|---|---|---|---|
| `frames/hero/` | 179 | 35 KB | ~6 MB |
| `frames/room/` | 179 | 53 KB | ~9 MB |
| `frames/serum/` | 179 | 45 KB | ~7 MB |
| **Total** | **537** | | **~22 MB** |

Doar `frame_0001.jpg` din secvența hero e preîncărcat. Restul se cer pe măsură ce
utilizatorul derulează — 537 de cereri HTTP separate, fiecare cu `max-age=0`.

Pe 4G în Bacău asta e o experiență proastă, iar publicul unui cabinet estetic e
majoritar pe mobil. Efectul asupra INP și asupra ratei de abandon e direct.

### Ce se poate face fără să pierzi efectul vizual

1. **Reduce numărul de cadre.** 179 de cadre pentru o secvență de scroll e mult peste
   ce percepe ochiul. 60 de cadre cu interpolare arată la fel și taie ~65% din greutate.
2. **Servește WebP sau AVIF.** Testul de content negotiation arată că serverul
   trimite JPEG indiferent de header-ul `Accept`. AVIF la calitate echivalentă
   scade fișierele cu 50–70%.
3. **Încarcă doar prima secvență pe mobil.** `room` și `serum` pot fi înlocuite cu
   o imagine statică sub 768px — economie imediată de ~16 MB pe mobil.
4. **Repară cache-ul** (vezi `technical.md`). Fără asta, fiecare revenire pe site
   re-descarcă tot.

## Alte probleme

### [High] `assets/owner.jpg` — 458 KB
Aproape jumătate de megabyte pentru un portret. Ar trebui sub 80 KB în WebP.

### [High] Imaginile nu au `width`/`height`
Niciuna dintre cele 6 imagini de conținut nu declară dimensiuni. Browserul nu poate
rezerva spațiu → layout shift la încărcare → CLS penalizat. Fix trivial, câștig direct
la Core Web Vitals.

### [Medium] Lenis încărcat de pe unpkg
`https://unpkg.com/lenis@1.3.21/dist/lenis.min.js` — dependență third-party pe calea
critică de render, dintr-un CDN care nu e sub controlul vostru. Mai bine self-hosted
pe Netlify, alături de restul JS-ului.
