# Automatizare Google Maps — workflow reparat

`automatizare-google-maps-fixed.json` este versiunea corectată a workflow-ului
`Automatizare Google Maps — NextFlow (al meu)` (ID `Jx6MFVZXthUieZnR`), pornind de la
backup-ul din Drive `n8n-backup-2026-08-13.json`.

## Cauza erorii raportate (nod `update1`)

`The client is not authorized to request an authorization code using this method`

Nodul `update1` este `n8n-nodes-base.googleSheets` v4.6 și folosește credențialul
`googleSheetsOAuth2Api` cu ID `EeDfi5zTegAZnHEs`. Eroarea vine de la Google
(`unauthorized_client`), nu din workflow — deci **nu se poate repara din JSON**.
Trebuie rezolvată în Google Cloud Console + ecranul de credențiale n8n:

1. Google Cloud → APIs & Services → Credentials → clientul OAuth trebuie să fie
   tip **Web application** (nu Desktop app / TV / Mobile).
2. *Authorized redirect URIs* trebuie să conțină exact `OAuth Redirect URL` afișat
   în credențialul n8n (`https://<instanta>/rest/oauth2-credential/callback`).
3. OAuth consent screen: dacă statusul e **Testing**, refresh token-ul expiră după
   7 zile → apasă **Publish App**.
4. Verifică activarea **Google Sheets API** și **Google Drive API** în proiect.
5. În n8n: deschide credențialul → **Reconnect**.

## Reparații aplicate în JSON

| # | Nod | Problemă | Reparație |
|---|-----|----------|-----------|
| 1 | `update1` → `If` | `update1` nu avea nicio ieșire, iar `If` nu avea nicio intrare. Tot lanțul de outreach (`If` → `Loop Over Items` → `sendConf2` → `Wait`) era o insulă orfană care nu rula niciodată. | Conectat `update1[out0]` → `If[in0]` |
| 2 | `update1` | Fără retry — orice eroare tranzitorie Sheets omora toată execuția | `retryOnFail=true`, `maxTries=3`, `waitBetweenTries=2000ms` |
| 3 | `GOOGLE MAPS SEARCH2` | `onError: continueRegularOutput` — la eșec Apify, obiectul de eroare curgea mai departe și se scriau rânduri corupte în Sheets. Backoff de 100ms e prea agresiv. | `onError: stopWorkflow`, backoff 2000ms |
| 4 | `ifMessageOk1` | `combinator: "or"` — trecea mai departe dacă exista *un singur* câmp din trei, deci Apify era apelat cu `location` sau `businessType` nedefinit | `combinator: "and"` |
| 5 | `Wait` | `parameters: {}` — gol, deci default-ul n8n (1 oră) se aplica la *fiecare* iterație a buclei | Explicit: 60 secunde |
| 6 | `Switch1` | Ambele ieșiri se numeau `text` | Ieșirea 1 redenumită `voice` |
| 7 | `apiKEYs1` | Token Apify hardcodat în clar | `={{ $env.APIFY_API_TOKEN }}` |
| 8 | `sendConf2` | Bearer token 360Messenger hardcodat în clar | `=Bearer {{ $env.MESSENGER_360_TOKEN }}` |

## Acțiuni rămase pentru tine

- **Rotește ambele token-uri.** Erau stocate în clar în workflow și au ajuns astfel în
  backup-urile JSON din Google Drive. Generează chei noi și pune-le ca variabile de
  mediu în n8n (`APIFY_API_TOKEN`, `MESSENGER_360_TOKEN`).
- **`sendConf2` a rămas dezactivat** (`disabled: true`), așa cum era. Nu l-am activat
  intenționat: pornește trimiterea de mesaje WhatsApp reci către numere reale, deci e
  decizia ta când îl activezi.
- **Verifică `sheetName`** în `update1`: e setat pe numele `Untitled`. Dacă tab-ul din
  spreadsheet are alt nume, nodul va eșua chiar și cu OAuth reparat.
- **Reglează `Wait`** la ritmul dorit (am pus 60s ca valoare rezonabilă anti-ban).

## Import

n8n → Workflows → **Import from File** → selectează
`automatizare-google-maps-fixed.json`. Credențialele se re-atașează după import
(ID-urile sunt păstrate, dar verifică-le).
