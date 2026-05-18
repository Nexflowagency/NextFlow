import { MetadataRoute } from 'next'
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
      {
            url: 'https://nextflow.ro',
                  lastModified: new Date(),
                        changeFrequency: 'monthly',
                              priority: 1,
                                  },
                                      {
                                            url: 'https://nextflow.ro/#how-it-works',
                                                  lastModified: new Date(),
                                                        changeFrequency: 'monthly',
                                                              priority: 0.8,
                                                                  },
                                                                      {
                                                                            url: 'https://nextflow.ro/#testimonials',
                                                                                  lastModified: new Date(),
                                                                                        changeFrequency: 'monthly',
                                                                                              priority: 0.7,
                                                                                                  },
                                                                                                      {
                                                                                                            url: 'https://nextflow.ro/#contact',
                                                                                                                  lastModified: new Date(),
                                                                                                                        changeFrequency: 'monthly',
                                                                                                                              priority: 0.9,
                                                                                                                                  },
                                                                                                                                    ]
                                                                                                                                    }