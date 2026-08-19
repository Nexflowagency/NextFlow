import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const anchors: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/#servicii', priority: 0.9 },
    { path: '/#proces', priority: 0.8 },
    { path: '/#impact', priority: 0.8 },
    { path: '/#pareri', priority: 0.7 },
    { path: '/#proiecte', priority: 0.8 },
    { path: '/#cta', priority: 0.9 },
    { path: '/politica-de-confidentialitate', priority: 0.3 },
    { path: '/termeni-si-conditii', priority: 0.3 },
  ]

  return anchors.map(({ path, priority }) => ({
    url: `https://nextflow.ro${path}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority,
  }))
}
