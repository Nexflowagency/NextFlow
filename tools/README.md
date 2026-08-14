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
| `--tone` | Cât de tare intră duotone-ul: `0` = poza originală, `1` = complet (implicit `0.76`) |
| `--layout` | `jos` (implicit) sau `sus` — pe ce margine stă titlul |

`--layout sus` merge doar dacă subiectul stă în jumătatea de jos a cadrului;
altfel titlul cade peste față. Pe cadrele obișnuite, filmate din față la masă,
rămâi pe `jos`.

Mărimea titlului se calculează singură cât să încapă pe lățime, deci un text
lung iese pur și simplu mai mic. Diacriticele merg.

### Ce cadru să-i dai

Fă un **screenshot direct din clip, de pe telefon**, dintr-un moment fără text
pe ecran și fără butonul de play. Cu cât rezoluția e mai mare, cu atât mai bine
— scriptul doar decupează și gradează, nu inventează detaliu. Cadrele luate din
pagina publică de Instagram au doar 361×640 px și nu sunt suficiente.

### De ce stă textul mai sus

Instagram taie un pătrat din centrul copertei pentru grila de profil. Titlul e
poziționat ca să rămână întreg și în reel, și în miniatura pătrată — de aceea
nu stă lipit de marginea de jos.

### Fonturi

`fonts/` conține Inter (Display Black pentru titlu, Bold pentru etichetă),
același font ca site-ul. Licență SIL Open Font — vezi `fonts/LICENSE-Inter.txt`.
