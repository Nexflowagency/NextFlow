# Schema / Structured Data — esthea.ro

Score: **55/100**

## Ce funcționează
`BeautySalon` de pe homepage e bine construit — are `address` complet cu cod poștal,
`geo` cu coordonate, `openingHoursSpecification`, `telephone` în format E.164,
`priceRange`, `currenciesAccepted`, `sameAs` către Instagram și `aggregateRating`.
`OfferCatalog` de pe /servicii.html listează toate cele 12 tratamente cu preț și monedă.
Asta e mai mult decât face majoritatea concurenței locale.

## Probleme

### [High] `image` este URL relativ în JSON-LD
Homepage: `"image": "assets/treatment.jpg"`. Recenzii: `"image": "assets/owner.jpg"`.
Schema.org cere URL absolut. Google nu poate rezolva calea și ignoră proprietatea.

**Fix**: `"image": "https://esthea.ro/assets/treatment.jpg"`

### [High] /contact.html nu are deloc schema
Pagina cu adresa, telefonul și harta — exact pagina pe care Google o vrea pentru
un business local — nu are niciun bloc JSON-LD. Ar trebui să poarte aceeași entitate
`BeautySalon`.

### [Medium] Două entități `BeautySalon` fără `@id` comun
Homepage și /recenzii.html declară fiecare câte un `BeautySalon`, cu proprietăți
diferite. Fără `@id` identic, Google le poate trata drept două afaceri distincte.

**Fix**: dă-i fiecăreia `"@id": "https://esthea.ro/#business"` și pune restul
paginilor să refere acel id.

### [Medium] `OfferCatalog` e orfan
Catalogul de servicii nu e legat de afacere. Ar trebui atașat prin `hasOfferCatalog`
pe entitatea `BeautySalon`, altfel Google nu știe cine oferă serviciile.

### [Medium] Recenziile de pe site propriu nu vor produce stele în SERP
Din 2019 Google nu mai afișează rich results pentru recenzii „self-serving" pe
`LocalBusiness`. Markup-ul `review` de pe /recenzii.html e corect tehnic, dar nu va
genera stele. Stelele vin din Google Business Profile, nu de aici.

Nu e un motiv să-l scoți — ajută la înțelegerea entității — dar așteptările trebuie
calibrate.

### [Medium] Lipsește `Person` pentru cosmetolog
Doina e menționată în text și în recenzii, dar nu există entitate `Person` cu rol,
calificări sau `worksFor`. Pentru un domeniu în care competența contează, e cel mai
ieftin semnal E-E-A-T disponibil.
