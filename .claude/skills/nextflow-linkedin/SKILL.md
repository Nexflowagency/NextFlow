---
name: nextflow-linkedin
description: Generează conținut LinkedIn pentru NextFlow.AI — agenția de automatizări AI a lui Iustin Maftei. Folosește acest skill ori de câte ori utilizatorul cere postări LinkedIn, carusele, texte pentru profil (headline, About, banner), mesaje de conectare, DM-uri de outreach, comentarii strategice, idei de conținut sau un calendar editorial pentru LinkedIn. Triggerează la "postare LinkedIn", "scrie-mi ceva pe LinkedIn", "DM pentru un prospect", "headline", "carusel LinkedIn", "hook pentru LinkedIn" sau orice variație legată de LinkedIn în contextul agenției.
---

# NextFlow.AI — Generator de conținut LinkedIn

Ghidul strategic complet e în `docs/linkedin-playbook.md`. Citește-l când ai nevoie de context
extins (setup profil, metrici, plan 90 de zile). Skill-ul ăsta e pentru **producție zilnică**.

## Context

**Agenție**: NextFlow.AI (nextflow.ro) · **Fondator**: Iustin Maftei, Suceava
**Servicii**: site-uri care aduc clienți, chatbot pe WhatsApp/Instagram, agent vocal telefonic,
programări automate în calendar, CRM cu reactivare automată
**Dovezi**: 20 de afaceri · Dermiq (Bacău), Esthea, Prestige Beauty (Suceava), Contour Collective (Cluj)
· implementare 2–6 săptămâni · prima discuție gratuită
**Brand**: verde #17D98B, negru cald #0A0908, os #EDE7DC, ton direct fără jargon

### ICP pe LinkedIn (diferit de Instagram/TikTok)
Pe Instagram vinzi saloanelor. **Pe LinkedIn vinzi decidenților din firme de 5–50 de oameni**:
clinici stomatologice/medicale, imobiliare, service auto, contabilitate, HR, firme de servicii
B2B, eCommerce cu echipă. Ticket mai mare, ciclu mai lung, limbaj mai sobru.

Dacă utilizatorul cere conținut pentru saloane pe LinkedIn, **semnalează neconcordanța** și
propune fie repoziționarea unghiului spre decidenți, fie mutarea conținutului pe Instagram.

---

## Reguli de algoritm care dictează forma (2026)

1. **Dwell time e semnalul #1.** Scrie ca să fie citit 60 de secunde, nu ca să ia like-uri.
2. **Comentariile cântăresc mult mai mult decât like-urile.** Fiecare postare se termină cu o
   întrebare la care ICP-ul chiar are opinie. Niciodată „ce părere aveți?" generic.
3. **Fără linkuri externe în postare** (~60% mai puțin reach) și **fără link în primul
   comentariu** (penalizat din 2026). CTA-ul e „scrie-mi [CUVÂNT] în mesaje" sau „link în profil".
4. **Caruselele/documentele** produc de 2–3× mai mult dwell time decât textul simplu.
5. **Conținut educațional („knowledge & advice")** > update-uri personale > promo.
6. **Textul evident generat de AI e suprimat.** Propoziții inegale ca lungime, detalii concrete,
   cifre reale, o imperfecțiune umană. Fără „într-o lume în care", „în peisajul actual",
   „nu doar X, ci și Y", fără emoji decorative în cascadă.
7. Nu două postări în aceeași 4 ore.

---

## Cei 5 piloni (rotește-i; nu da 3 postări din același pilon)

| Pilon | % | Miez |
|---|---|---|
| **Framework** | 30% | Cum abordezi o problemă, pas cu pas |
| **Studiu de caz** | 25% | Cifre concrete, înainte/după, nume de client |
| **Observație de piață** | 20% | Tipar văzut la mai mulți clienți |
| **Opinie contrară** | 15% | Poziție fermă susținută de experiență |
| **Din culise** | 10% | Proces, greșeli, decizii, refuzuri |

Interzis: citate motivaționale, „grateful for this journey", meme-uri repostate, listicole generice.

---

## Structura unei postări text

```
[CÂRLIG — max 10 cuvinte, singurul rând vizibil înainte de „see more"]

[TENSIUNE — 1–2 rânduri: de ce contează, cu o cifră]

[CORP — 4–8 rânduri scurte, unul pe idee.
 Liste cu · sau →. Niciun paragraf compact.]

[CONCLUZIE — o propoziție care rămâne în minte]

[ÎNTREBARE — deschisă, specifică, la care ICP-ul are opinie]

[CTA opțional — „Scrie-mi AUDIT în mesaje dacă vrei X"]

#automatizare #inteligentaartificiala #antreprenoriat #afaceriromania #AI
```

**Lungime**: 900–1.600 caractere. **Hashtag-uri**: 3–5, la final, în română.

### Cârlige care funcționează
- Cifra brutală: „Firma asta pierdea 3.200 € pe lună. Din mesaje necitite."
- Contradicția: „Nu muncești prea puțin. Muncești la lucrurile greșite."
- Scena: „Un client îți scrie la 23:40. Tu dormi."
- Mărturisirea: „Am refuzat un proiect de 4.000 € luna trecută."
- Observația de insider: „Am intrat în 20 de firme românești. Toate fac aceeași greșeală."

### Cârlige interzise
„Astăzi vreau să vorbim despre...", „AI-ul schimbă totul", „5 sfaturi pentru...",
orice începe cu „În calitate de fondator".

---

## Carusel / document (formatul cu cel mai bun dwell time)

6–10 slide-uri. Un slide = o idee = maximum 12 cuvinte.

```
Slide 1  Titlul-cârlig + promisiunea (text mare, fundal întunecat, accent verde)
Slide 2  Problema, cu o cifră
Slide 3–8 Un pas / o idee per slide, numerotate
Slide 9  Rezumatul în 3 rânduri
Slide 10 CTA: „Scrie-mi [CUVÂNT] în mesaje" + nextflow.ro
```

Textul postării care însoțește caruselul: cârlig + 2 rânduri de context + întrebare. Nu repeta
conținutul slide-urilor. Pentru grafică, deleagă către skill-ul `banner-design` sau `design`.

---

## Outreach — reguli de siguranță obligatorii

Înainte de a genera orice secvență de DM, respectă limitele (contul e activul, nu lista):
- Maximum **15–20 invitații/zi**
- Rată de acceptare **peste 30%** (sub asta LinkedIn taie plafonul automat)
- Rată de răspuns DM **peste 10–15%** (sub asta, reach-ul organic e suprimat)
- **5–7 zile de încălzire** înainte de invitație: comentarii la 2 postări de-ale prospectului
- **3 atingeri, nu 5.** Apoi te oprești, elegant.

### Secvența standard

**1. Invitația** (fără notă, sau o propoziție care nu vinde)
> „Salut, [Nume] — urmăresc ce faceți la [Firmă]. Mă interesează zona de [nișă], hai să rămânem în legătură."

**2. Primul mesaj — zero pitch, cere permisiunea nu timpul**
> „Mersi de accept, [Nume]. Am văzut că [observație specifică din profilul/site-ul lui].
> Lucrez cu [3 clinici] din România pe partea de [problemă]. Am observat un tipar la toate —
> și n-are legătură cu software-ul. Îți trimit în 2 rânduri ce am văzut, dacă te interesează?"

**3. Valoarea** (doar dacă a zis da) — 4–6 rânduri concrete, fără link. Apoi o singură dată:
> „Dacă vrei, îți arăt în 15 minute cum arată la [Firmă] — cu numerele voastre. Fără prezentare,
> fără ofertă. Dacă nu e pentru voi, îți zic eu primul."

**4. Închiderea** (ziua ~15)
> „[Nume], închid subiectul ca să nu te bat la cap. Dacă ajungeți în punctul în care mesajele
> necitite devin o problemă, scrie-mi. Rămâne valabil."

**Cel mai puternic deschizător**: un activ mic făcut pentru omul ăla — Loom de 90s cu o problemă
reală de pe site-ul lui, audit de o pagină, screenshot cu un chatbot care răspunde ca firma lui.
Când generezi outreach, propune-l explicit.

**Niciodată**: pitch în nota de conectare, voice message la rece, același mesaj la 50 de oameni,
tool de automatizare pe cont sub 500 de conexiuni.

---

## Comentarii strategice (20–30 min/zi — aduc mai mult decât postările în primele 60 de zile)

8–10 comentarii/zi pe postările ICP-ului. Structura unui comentariu bun:
1. O propoziție care validează ceva specific din postare (nu generalități)
2. O propoziție care **adaugă** — un contra-exemplu, o cifră, un caz din practica ta
3. Opțional, o întrebare către autor

2–4 propoziții. Fără linkuri, fără „Great post!", fără a-ți menționa serviciile.

---

## Formate de output

**Implicit** — pentru fiecare piesă generată:
```
=== POSTARE #N — [PILON] ===
Cârlig: [primul rând]
Format: text / carusel / video
Estimare dwell: scurt / mediu / lung

[textul complet, gata de copiat]

Întrebare de final: [...]
Hashtag-uri: [...]
De ce funcționează: [1–2 rânduri]
```

Când utilizatorul cere mai multe piese, oferă și un **calendar** (zi + pilon + cârlig) înainte de
textele complete, ca să poată tăia din start ce nu-i place.

Când cere text de profil (headline/About), livrează **3 variante** și spune care e recomandată și de ce.

---

## Reguli de scriere

1. **Română naturală**, fără anglicisme inutile. Termeni tehnici (CRM, chatbot, n8n) doar unde e firesc.
2. **Propoziții scurte** — media sub 15 cuvinte, dar variază lungimea ca să nu sune robotic.
3. **Specific > generic**: „40 de mesaje pe zi, răspundea la 18" bate „multe mesaje".
4. **Nu inventa cifre de client.** Folosește doar dovezile reale (20 de afaceri, cei 4 clienți
   numiți, 2–6 săptămâni). Dacă un unghi are nevoie de o cifră pe care n-o ai, marcheaz-o
   `[COMPLETEAZĂ: ...]` și cere-i-o lui Iustin.
5. **Brandul apare natural**, o singură dată, spre final. Niciodată în cârlig.
6. **Un singur CTA** per postare.
7. **Fără promisiuni de rezultat garantat** — descrii ce s-a întâmplat, nu ce se va întâmpla.
