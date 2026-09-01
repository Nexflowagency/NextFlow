# Images — esthea.ro

Score: **55/100**

## Ce funcționează
Toate cele 6 imagini de conținut de pe homepage au `alt` descriptiv și în română:
„Tratament facial la ESTHEA cu produse Dermalogica", „Doina — cosmetolog ESTHEA",
„Rezultat înainte și după LuminFusion la ESTHEA". Zero imagini fără alt, zero alt gol.
Toate au `loading="lazy"` și `decoding="async"`.

Asta e peste media pieței și merită spus.

## Probleme

### [High] Fără `width`/`height` pe nicio imagine
Cauzează layout shift. Fix mecanic, câștig direct la CLS.

### [High] Format și greutate
Toate imaginile sunt JPEG. Serverul nu face content negotiation — trimite JPEG chiar
și când browserul anunță `Accept: image/avif,image/webp`. `owner.jpg` are 458 KB.

### [Medium] Cele 537 de cadre sunt tot JPEG
Vezi `performance.md`. Conversia la AVIF e cea mai mare economie disponibilă pe site.
