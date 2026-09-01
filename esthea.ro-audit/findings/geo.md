# AI Search Readiness (GEO/AEO) — esthea.ro

Score: **40/100**

## Acces pentru crawlere AI
`robots.txt` este `User-agent: * / Allow: /` — deci GPTBot, ClaudeBot, PerplexityBot,
Google-Extended și restul au acces complet. Nimic de reparat aici; multe site-uri
blochează accidental exact aceste crawlere.

## Probleme

### [High] Densitate factuală scăzută → citabilitate slabă
Copy-ul homepage-ului e construit pe atmosferă: „Pielea ta, citită în detaliu",
„Un ritual, nu o procedură", „La ESTHEA nu grăbim nimic". E bun pentru conversie,
dar un model care caută un răspuns concret nu are ce cita.

Ce lipsește și e ușor de adăugat, în text vizibil:
- cât durează fiecare tratament
- la ce interval se recomandă repetarea
- pentru ce tip de ten e potrivit fiecare protocol
- ce se întâmplă în cele trei etape ale ședinței

### [High] Site-ul nu apare pentru propriul brand + serviciu
O căutare pentru „cabinet estetic Bacău curățare facială esthea" întoarce Instagram-ul
(@__esthea__), directoare medicale și concurenți — dar nu esthea.ro. Domeniul e nou,
iar semnalele de autoritate lipsesc aproape complet.

Contul de Instagram e activul digital care rankează acum. Site-ul trebuie legat de el
în ambele sensuri și trebuie să adune citări.

### [Medium] Lipsește `llms.txt`
404. Fișier de câteva zeci de linii care descrie structura site-ului pentru motoarele AI.

### [Medium] Zero structură întrebare-răspuns
Fără heading-uri formulate ca întrebări și fără `FAQPage` schema, site-ul nu e
eligibil nici pentru featured snippets, nici pentru a fi citat în AI Overviews.

### [Medium] Semnale de autoritate concentrate într-un singur loc
`sameAs` listează doar Instagram. Lipsesc Google Business Profile, Facebook și
directoarele locale relevante. Pentru recunoașterea entității, modelele au nevoie de
mai multe surse care confirmă aceleași date.
