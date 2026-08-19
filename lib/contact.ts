/** Date de contact, într-un singur loc. */

export const PHONE_DISPLAY = '0767 422 497'
export const PHONE_E164 = '+40767422497'

const WA_MESSAGE =
  'Bună! Am văzut site-ul Nextflow și vreau să discutăm despre afacerea mea.'

export const WHATSAPP_URL = `https://wa.me/40767422497?text=${encodeURIComponent(WA_MESSAGE)}`

/* Adresa din documentele legale de pe main. Vezi nota din raport:
   trebuie confirmat că e cutia poștală citită efectiv, fiindcă pe ea
   ajung solicitările GDPR. */
export const EMAIL = 'hello@nextflow.ro'

export const INSTAGRAM_URL = 'https://www.instagram.com/nextflow_agency.ai/'
export const SITE_URL = 'https://nextflow.ro/'

/* ──────────────────────────────────────────────────────────────
   Linkuri obligatorii pentru comercianți din România.
   Legea cere un link electronic accesibil către cele două
   platforme, nu un anumit badge — de aceea sunt randate ca
   elemente proprii, nu ca imagini luate de pe anpc.ro (care
   oricum și-au schimbat adresele și dau 404).
   ────────────────────────────────────────────────────────────── */

/** ANPC — Soluționarea Alternativă a Litigiilor */
export const ANPC_SAL_URL = 'https://reclamatiisal.anpc.ro/'

/** Comisia Europeană — Soluționarea Online a Litigiilor */
export const EU_SOL_URL = 'https://consumer-redress.ec.europa.eu/index_en'
