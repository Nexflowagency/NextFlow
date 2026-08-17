import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const anchors: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/#sistem', priority: 0.9 },
    { path: '/#proces', priority: 0.8 },
    { path: '/#rezultate', priority: 0.8 },
    { path: '/#proiecte', priority: 0.8 },
    { path: '/#cta', priority: 0.9 },
  ]

  return anchors.map(({ path, priority }) => ({
    url: `https://nextflow.ro${path}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority,
  }))
}
