/**
 * Harta site-ului, într-un singur loc.
 *
 * Fiecare secțiune de pe pagina de start are și o pagină proprie, cu adresă
 * separată: cine caută pe Google „cât costă automatizarea” trebuie să ajungă
 * direct la pagina care răspunde, nu la o ancoră în mijlocul paginii de start.
 * Ancorele rămân valide — id-urile secțiunilor nu s-au schimbat.
 */

export type NavPage = {
  index: string
  /** Eticheta scurtă, cea din meniu */
  label: string
  href: string
  /** O propoziție despre ce găsește omul acolo — folosită la linkurile de final */
  blurb: string
}

export const pages: NavPage[] = [
  {
    index: '01',
    label: 'Ce facem',
    href: '/servicii',
    blurb: 'Cele cinci lucruri pe care le pun să lucreze în locul tău.',
  },
  {
    index: '02',
    label: 'Proces',
    href: '/cum-functioneaza',
    blurb: 'Trei pași, de la prima discuție până la sistemul care merge singur.',
  },
  {
    index: '03',
    label: 'Cât câștigi',
    href: '/cat-castigi',
    blurb: 'Mută două cursoare și vezi câte ore și cât ban stau blocate.',
  },
  {
    index: '04',
    label: 'Păreri',
    href: '/testimoniale',
    blurb: 'Filmări și mesaje de la cliente, exact așa cum le-am primit.',
  },
  {
    index: '05',
    label: 'Proiecte',
    href: '/proiecte',
    blurb: 'Site-urile pe care le-am construit, cu link către varianta live.',
  },
  {
    index: '06',
    label: 'Contact',
    href: '/contact',
    blurb: 'WhatsApp, telefon sau formular. Alege cum îți e mai comod.',
  },
]

/** Meniul din antet: totul în afară de Contact, care are butonul lui. */
export const menuPages = pages.filter((p) => p.href !== '/contact')

/** Props comune secțiunilor care apar și pe pagina de start, și pe pagina lor. */
export type SectionProps = {
  /**
   * Pe pagina proprie titlul secțiunii ar fi al doilea titlu identic la
   * câțiva pixeli distanță. Antetul paginii îl ține pe primul (h1), iar
   * secțiunea intră direct în conținut.
   */
  hideHeader?: boolean
}
