import { MetadataRoute } from 'next'
import { pages } from '@/lib/nav'

export const dynamic = 'force-static'

/* Prioritățile paginilor de conținut. Contactul și „ce facem" sunt cele
   pe care vrem să le vadă omul întâi; restul vin după. */
const priorities: Record<string, number> = {
  '/servicii': 0.9,
  '/contact': 0.9,
  '/cat-castigi': 0.8,
  '/cum-functioneaza': 0.8,
  '/proiecte': 0.8,
  '/testimoniale': 0.7,
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const entries: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    ...pages.map((p) => ({ path: p.href, priority: priorities[p.href] ?? 0.7 })),
    { path: '/politica-de-confidentialitate', priority: 0.3 },
    { path: '/termeni-si-conditii', priority: 0.3 },
  ]

  /* Exportul static scrie fiecare pagină ca director cu index.html, deci
     adresa canonică are bară la final. Sitemap-ul trebuie să o aibă și el,
     altfel Google trece prin câte o redirecționare pentru fiecare pagină. */
  return entries.map(({ path, priority }) => ({
    url: `https://nextflow.ro${path}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority,
  }))
}
