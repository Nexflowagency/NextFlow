# Analytics & SEO — playbook pentru site-urile de client

Setup-ul de măsurare pe care îl replici la fiecare proiect nou. Durează
~15 minute per client și e ceea ce îți permite să arăți rezultate în loc
să le promiți.

---

## 1. Ce face fiecare tool

| Tool | Răspunde la întrebarea | Cost |
|---|---|---|
| **Google Search Console** | Pe ce caută oamenii și pe ce poziție apar? | gratuit |
| **GA4** | Câți vin, de unde, și câți convertesc? | gratuit |
| **Microsoft Clarity** | De ce nu convertesc ceilalți? | gratuit, fără limită de trafic |

Search Console e singurul care dă date SEO propriu-zise. GA4 și Clarity
măsoară ce se întâmplă **după** click — sunt indispensabile pentru
optimizare, dar nu influențează direct rankingul.

---

## 2. Instalare pe un proiect nou

### 2.1 Creează conturile (per client, nu pe contul tău)

Creează proprietățile pe **contul de Google/Microsoft al clientului**, apoi
adaugă-te ca administrator. Dacă le faci pe contul tău, la finalul
colaborării clientul rămâne fără datele lui — și e un motiv frecvent de
conflict.

1. **GA4** → [analytics.google.com](https://analytics.google.com) → Admin →
   Create property → Data streams → Web → copiază `Measurement ID` (`G-XXXXXXXXXX`)
2. **Clarity** → [clarity.microsoft.com](https://clarity.microsoft.com) →
   New project → copiază `Project ID` din Settings → Overview
3. **Search Console** → [search.google.com/search-console](https://search.google.com/search-console)
   → adaugă proprietatea (Domain, verificare prin DNS TXT)

### 2.2 Copiază codul

Din acest repo, în proiectul nou:

```
lib/analytics.ts
components/Analytics.tsx
```

Apoi în `app/layout.tsx`:

```tsx
import Analytics from '@/components/Analytics'

// ...în <body>, după {children}:
<Analytics />
```

### 2.3 Setează variabilele de mediu

În Netlify / Vercel → Environment variables:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx
```

Fără ele componenta nu randează nimic, deci poți face deploy și înainte de
a avea conturile gata.

### 2.4 Leagă Search Console de GA4

GA4 → Admin → Product links → Search Console links. Fără pasul ăsta, în GA4
nu vezi cuvintele cheie pentru care ai apărut în Google.

### 2.5 Trimite sitemap-ul

Search Console → Sitemaps → `https://domeniu.ro/sitemap.xml`

---

## 3. Tracking-ul conversiilor

Fără evenimente definite, GA4 îți spune doar câți oameni au intrat — ceea
ce nu e suficient pentru a demonstra valoare.

Folosește `trackEvent` din `lib/analytics.ts`. Trimite simultan în GA4 și
în Clarity, deci poți vedea numărul **și** înregistrarea video a sesiunii.

```tsx
import { trackEvent } from '@/lib/analytics'

<a
  href="https://wa.me/40767422497"
  onClick={() => trackEvent('whatsapp_click', { location: 'footer' })}
>
  Scrie-ne pe WhatsApp
</a>
```

Evenimente deja implementate în acest proiect:

| Eveniment | Când se declanșează | Unde |
|---|---|---|
| `booking_click` | userul deschide popup-ul Calendly | `components/CalendlyButton.tsx` |
| `booking_scheduled` | programarea e confirmată în Calendly | `components/CalendlyButton.tsx` |

Raportul dintre cele două îți arată câți abandonează în widget — de obicei
e locul cu cea mai mare pierdere și cel mai ieftin de reparat.

### Marchează-le drept conversii în GA4

GA4 → Admin → Events → comută `Mark as key event` pe `booking_scheduled`.
Abia atunci apare în rapoartele de conversie și în atribuirea pe canale.

> Evenimentele apar în GA4 după 24h în rapoartele standard, dar **imediat**
> în Reports → Realtime și în DebugView. Verifică acolo, nu aștepta o zi ca
> să afli că ai greșit numele evenimentului.

### Alte evenimente utile, în funcție de client

- `form_submit` — formular de contact trimis
- `phone_click` / `whatsapp_click` — pentru clienți care primesc lead-uri pe telefon
- `pricing_view` — a ajuns la secțiunea de prețuri
- `video_play` — a pornit video-ul de prezentare

---

## 4. Ce te uiți în Clarity (primele 30 de zile)

Ordinea în care merită să te uiți, de la cel mai profitabil:

1. **Rage clicks** — userii dau click pe ceva ce arată ca buton dar nu e.
   Aproape întotdeauna e o reparație de 5 minute cu impact direct.
2. **Dead clicks** — click-uri care nu fac nimic. Deseori imagini sau
   carduri pe care userul se aștepta să poată da click.
3. **Scroll depth** — dacă CTA-ul principal e sub adâncimea la care ajunge
   50% dintre useri, mută-l mai sus.
4. **Quick backs** — intră din Google și se întorc imediat. Semnal că
   pagina nu răspunde intenției din spatele căutării: fie schimbi
   conținutul, fie targetezi alt cuvânt cheie.
5. **Recordings filtrate pe conversie** — uită-te la 5 sesiuni care au
   convertit și 5 care nu. Diferența e de obicei evidentă în 10 minute.

Clarity are și un raport de Core Web Vitals per pagină — util pentru
partea tehnică de SEO.

---

## 5. Ce trebuie să știi legal (RO / GDPR)

Ambele tool-uri folosesc cookie-uri și procesează date cu caracter personal.
Pentru clienți din UE:

- Ai nevoie de **banner de consimțământ** care blochează scripturile până
  la accept. Componenta actuală se încarcă necondiționat — dacă clientul
  are nevoie de conformitate strictă, mai adaugi un cookie banner și
  condiționezi randarea lui `<Analytics />` de consimțământ.
- În GA4: Admin → Data settings → activează **IP anonymization** (implicit
  în GA4) și setează retenția la 14 luni.
- Menționează ambele tool-uri în politica de confidențialitate a site-ului.
- Clarity înregistrează sesiuni video: **maschează câmpurile sensibile**.
  Implicit maschează input-urile, dar verifică în Settings → Masking și pune
  `data-clarity-mask="true"` pe orice element cu date personale.

---

## 6. Checklist de livrare

Rulează-l înainte să predai site-ul:

- [ ] GA4 creat pe contul clientului, tu ca admin
- [ ] Clarity creat pe contul clientului, tu ca admin
- [ ] Search Console verificat prin DNS
- [ ] Search Console legat de GA4
- [ ] Sitemap trimis și indexat
- [ ] Variabilele de mediu setate în producție
- [ ] Realtime din GA4 arată vizita ta de test
- [ ] Clarity arată prima înregistrare
- [ ] Evenimentele de conversie marcate ca key events în GA4
- [ ] Google Business Profile creat/revendicat (dacă e afacere locală)
- [ ] Politica de confidențialitate menționează GA4 și Clarity
