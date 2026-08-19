/** Date de contact, într-un singur loc. */

export const PHONE_DISPLAY = '0767 422 497'
export const PHONE_E164 = '+40767422497'

const WA_MESSAGE =
  'Bună! Am văzut site-ul Nextflow și vreau să discutăm despre afacerea mea.'

export const WHATSAPP_URL = `https://wa.me/40767422497?text=${encodeURIComponent(WA_MESSAGE)}`

/* Varianta fără mesaj precompletat. Pe paginile legale, un text de tipul
   „vreau să discutăm despre afacerea mea" ar fi nelalocul lui pentru
   cineva care vine să-și exercite un drept GDPR. */
export const WHATSAPP_PLAIN = 'https://wa.me/40767422497'

/* Formularul de calificare („Formular ICP — Despre Business & Probleme").
   Atenție: adresa este cea publică, form.typeform.com/to/<id>. Linkul din
   panoul Typeform (admin.typeform.com/form/<id>/create) e ecranul de
   editare și trimite vizitatorii la login. */
export const TYPEFORM_URL = 'https://form.typeform.com/to/IdcZF8Tv'

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
