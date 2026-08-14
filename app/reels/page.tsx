import type { Metadata } from 'next'
import Link from 'next/link'
import { ReelFooter, ReelHeader } from '@/components/ReelChrome'
import { reelsByDate } from '@/lib/reels'

export const metadata: Metadata = {
  title: 'Postările noastre, pe larg | Nextflow.ai',
  description:
    'Fiecare reel de pe Instagram, explicat pe larg: ideile din clip, exemplele concrete și pasul următor.',
  alternates: { canonical: 'https://nextflow.ro/reels/' },
  openGraph: {
    title: 'Postările noastre, pe larg | Nextflow.ai',
    description:
      'Fiecare reel de pe Instagram, explicat pe larg: ideile din clip, exemplele concrete și pasul următor.',
    url: 'https://nextflow.ro/reels/',
    siteName: 'Nextflow.ai',
    type: 'website',
    locale: 'ro_RO',
  },
}

export default function ReelsIndex() {
  return (
    <div className="min-h-screen flex flex-col">
      <ReelHeader />

      <main className="flex-1">
        <div className="container-main">
          <div className="max-w-[46rem] mx-auto pt-14 md:pt-20 pb-20 md:pb-28">

            <span className="section-label">
              <span className="green-dot" />
              De pe Instagram
            </span>

            <h1
              className="mt-5 font-extrabold text-white"
              style={{
                fontSize: 'clamp(2.25rem, 5.5vw, 3.5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
              }}
            >
              Postările noastre, <span style={{ color: '#10B981' }}>pe larg.</span>
            </h1>

            <p
              className="mt-6 text-lg"
              style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}
            >
              Un clip are 30 de secunde. Aici ai ideea întreagă — ce spunem, de ce
              și ce faci concret cu asta.
            </p>

            <ul className="mt-14 flex flex-col">
              {reelsByDate.map((reel, i) => (
                <li
                  key={reel.slug}
                  style={{ borderTop: i === 0 ? '1px solid rgba(255,255,255,0.08)' : undefined }}
                >
                  <Link
                    href={`/reels/${reel.slug}/`}
                    className="group block py-8 transition-colors"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: '#10B981' }}
                      >
                        {reel.eyebrow}
                      </span>
                      <span style={{ color: 'rgba(255,255,255,0.15)' }}>/</span>
                      <time
                        dateTime={reel.date}
                        className="text-xs font-medium"
                        style={{ color: 'rgba(255,255,255,0.3)' }}
                      >
                        {reel.dateLabel}
                      </time>
                    </div>

                    <h2
                      className="mt-3 font-bold text-white transition-colors group-hover:text-[#F5C518]"
                      style={{
                        fontSize: 'clamp(1.4rem, 3vw, 1.875rem)',
                        letterSpacing: '-0.03em',
                        lineHeight: 1.2,
                      }}
                    >
                      {reel.title}
                      {reel.titleAccent}
                    </h2>

                    <p
                      className="mt-3 text-base"
                      style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}
                    >
                      {reel.lead}
                    </p>

                    <span
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: '#10B981' }}
                    >
                      Citește pe larg
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2.5 7H11.5M8 3.5L11.5 7L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <ReelFooter />
    </div>
  )
}
