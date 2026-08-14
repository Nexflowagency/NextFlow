# tools/

Unelte de lucru pentru conținut. Nu fac parte din site — nu intră în build.

## coperta_reel.py — coperte pentru reel-uri

Ia un cadru din clip și scoate o copertă **1080×1920** gata de urcat, cu
gradarea și fontul agenției.

```bash
pip install pillow

python3 tools/coperta_reel.py cadru.jpg -t "ai-ul nu e|un moft"
```

Rezultatul se salvează lângă sursă, ca `cadru-coperta.jpg`.

### Opțiuni

| Opțiune | La ce folosește |
|---|---|
| `-t, --text` | Titlul. `\|` desparte rândurile: `-t "ai-ul nu e\|un moft"` |
| `-o, --out` | Unde se salvează (implicit `<sursa>-coperta.jpg`) |
| `--ghost` | Cuvânt repetat estompat în fundal, ex. `--ghost AI` |
| `--eyebrow` | Etichetă mică verde deasupra titlului, ex. `--eyebrow "automatizare"` |
| `--focus` | Decupajul pe verticală: `0` = păstrează sus, `1` = păstrează jos (implicit `0.35`) |
| `--tone` | Cât de tare intră gradarea: `0` = poza originală, `1` = complet (implicit `0.76`) |
| `--stil` | `viu` (implicit) sau `duotone` — vezi mai jos |
| `--glow` | Lumina verde din colț: `0` = deloc, `1` = puternic (implicit `0.6`, doar pe stilul `viu`) |
| `--layout` | `jos` (implicit) sau `sus` — pe ce margine stă titlul |
| `--scale` | Multiplică formatul peste 1080×1920. `--scale 2` dă 2160×3840, cu aceeași așezare |

`--layout sus` merge doar dacă subiectul stă în jumătatea de jos a cadrului;
altfel titlul cade peste față. Pe cadrele obișnuite, filmate din față la masă,
rămâi pe `jos`.

Mărimea titlului se calculează singură cât să încapă pe lățime, deci un text
lung iese pur și simplu mai mic. Diacriticele merg.

### Cele două stiluri de culoare

**`viu`** (implicit) — gradare de film. Culorile reale ale cadrului rămân:
pielea rămâne piele, lemnul rămâne lemn. Verdele brandului intră doar în umbre
și ca lumină difuză într-un colț, iar saturația și contrastul cresc. Ăsta e
stilul de folosit implicit, mai ales pe testimoniale, unde un om colorat
nenatural taie din credibilitate.

**`duotone`** — stil grafic, plat: toată imaginea se mapează pe o rampă
negru → verde → alb. Arată decis și foarte „de brand", dar stinge culorile și
poate ieși trist pe cadre luminoase. Merită doar când vrei un contrast puternic
cu restul feed-ului.

Dacă o copertă iese ștearsă, urcă `--tone` (mai multă saturație și contrast)
sau `--glow`. Dacă iese prea verde, coboară-le.

### Ce cadru să-i dai

Fă un **screenshot direct din clip, de pe telefon**, dintr-un moment fără text
pe ecran și fără butonul de play. Cu cât rezoluția e mai mare, cu atât mai bine
— scriptul doar decupează și gradează, nu inventează detaliu. Cadrele luate din
pagina publică de Instagram au doar 361×640 px și nu sunt suficiente.

Dă-i un cadru mai mare decât formatul final, nu exact cât trebuie. O sursă de
2000–4000 px pe înălțime, micșorată la 1920, iese vizibil mai curată decât una
de fix 1920 — de asta merită screenshot-ul de pe telefon și nu unul redimensionat
dinainte.

Pentru Instagram încarcă varianta implicită, **1080×1920**. `--scale` e util
când vrei fișierul și pentru altceva (miniatură YouTube, prezentare, print);
pentru Reels nu aduce nimic în plus, fiindcă Instagram oricum reduce la 1080.

### De ce stă textul mai sus

Instagram taie un pătrat din centrul copertei pentru grila de profil. Titlul e
poziționat ca să rămână întreg și în reel, și în miniatura pătrată — de aceea
nu stă lipit de marginea de jos.

### Fonturi

`fonts/` conține Inter (Display Black pentru titlu, Bold pentru etichetă),
același font ca site-ul. Licență SIL Open Font — vezi `fonts/LICENSE-Inter.txt`.
