import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CalendlyButton from '@/components/CalendlyButton'
import { ReelFooter, ReelHeader, INSTAGRAM_URL } from '@/components/ReelChrome'
import { getReel, reels } from '@/lib/reels'

const SITE = 'https://nextflow.ro'

export function generateStaticParams() {
  return reels.map((reel) => ({ slug: reel.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const reel = getReel(slug)
  if (!reel) return {}

  const url = `${SITE}/reels/${reel.slug}/`

  return {
    title: reel.metaTitle,
    description: reel.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: reel.metaTitle,
      description: reel.metaDescription,
      url,
      siteName: 'Nextflow.ai',
      type: 'article',
      locale: 'ro_RO',
      publishedTime: reel.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: reel.metaTitle,
      description: reel.metaDescription,
    },
  }
}

export default async function ReelPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const reel = getReel(slug)
  if (!reel) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${reel.title}${reel.titleAccent}`,
    description: reel.metaDescription,
    datePublished: reel.date,
    inLanguage: 'ro-RO',
    mainEntityOfPage: `${SITE}/reels/${reel.slug}/`,
    author: { '@type': 'Organization', name: 'Nextflow.ai', url: SITE },
    publisher: { '@type': 'Organization', name: 'Nextflow.ai', url: SITE },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ReelHeader />

      <main className="flex-1">
        <div className="container-main">
          <article className="max-w-[46rem] mx-auto pt-14 md:pt-20 pb-20 md:pb-28">

            {/* ── Înapoi ── */}
            <Link
              href="/reels/"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M11.5 7H2.5M6 3.5L2.5 7L6 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Toate postările
            </Link>

            {/* ── Eyebrow ── */}
            <div className="flex flex-wrap items-center gap-3 mt-10">
              <span className="section-label">
                <span className="green-dot" />
                {reel.eyebrow}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>/</span>
              <time
                dateTime={reel.date}
                className="text-xs font-medium tracking-wide"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                {reel.dateLabel}
              </time>
            </div>

            {/* ── Titlu ── */}
            <h1
              className="mt-5 font-extrabold text-white"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
              }}
            >
              {reel.title}
              <span style={{ color: '#10B981' }}>{reel.titleAccent}</span>
            </h1>

            {/* ── Lead ── */}
            <p
              className="mt-7 text-lg md:text-xl"
              style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}
            >
              {reel.lead}
            </p>

            <div className="mt-12 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />

            {/* ── Ideile din clip ── */}
            <ol className="mt-12 flex flex-col gap-11">
              {reel.points.map((point, i) => (
                <li key={point.title} className="flex gap-5 md:gap-7">
                  <span
                    className="shrink-0 pt-1 text-sm font-bold tabular-nums"
                    style={{ color: '#10B981', letterSpacing: '0.05em' }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2
                      className="text-white font-semibold"
                      style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.4rem)', letterSpacing: '-0.02em', lineHeight: 1.35 }}
                    >
                      {point.title}
                    </h2>
                    <p
                      className="mt-3 text-base md:text-[1.0625rem]"
                      style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}
                    >
                      {point.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* ── Întrebarea din clip ── */}
            <div
              className="mt-16 pl-6 md:pl-7"
              style={{ borderLeft: '2px solid #F5C518' }}
            >
              <p
                className="font-semibold text-white"
                style={{ fontSize: 'clamp(1.15rem, 2.4vw, 1.5rem)', letterSpacing: '-0.02em', lineHeight: 1.45 }}
              >
                {reel.question}
              </p>
              <p className="mt-3 text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
                Răspunde-ne în comentarii la reel sau în DM.
              </p>
            </div>

            {/* ── CTA ── */}
            <section
              className="mt-16 rounded-2xl p-8 md:p-10"
              style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h2
                className="text-white font-bold"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}
              >
                {reel.ctaTitle}
              </h2>
              <p className="mt-4 text-base" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                {reel.ctaBody}
              </p>

              {reel.keyword && (
                <p className="mt-6 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Cuvântul cheie:{' '}
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-lg font-bold text-sm"
                    style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)', color: '#10B981' }}
                  >
                    {reel.keyword}
                  </span>
                </p>
              )}

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#cta" className="btn-primary text-base">
                  Programează un Call
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-base"
                >
                  Scrie-ne în DM
                </a>
              </div>
            </section>

            {/* ── Postarea originală ── */}
            <div className="mt-14">
              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'rgba(255,255,255,0.25)' }}
              >
                Din postare
              </p>
              <blockquote
                className="mt-4 text-base"
                style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}
              >
                {reel.caption}
              </blockquote>
              <a
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: '#10B981' }}
              >
                Vezi reel-ul pe Instagram
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M5 9L9 5M9 5H5.5M9 5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="1.75" y="1.75" width="10.5" height="10.5" rx="3" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </main>

      <ReelFooter />
      <CalendlyButton />
    </div>
  )
}
