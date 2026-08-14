import { MetadataRoute } from 'next'
import { reels } from '@/lib/reels'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: 'https://nextflow.ro',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://nextflow.ro/#how-it-works',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://nextflow.ro/#testimonials',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://nextflow.ro/#contact',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://nextflow.ro/reels/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...reels.map((reel) => ({
      url: `https://nextflow.ro/reels/${reel.slug}/`,
      lastModified: new Date(reel.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
