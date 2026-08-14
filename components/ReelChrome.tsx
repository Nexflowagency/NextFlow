import Link from 'next/link'

const INSTAGRAM_URL = 'https://www.instagram.com/nextflow_agency.ai/'

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className="flex items-center justify-center w-9 h-9 rounded-xl"
        style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)' }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M2 9L6.5 4.5L11 9L15.5 4.5" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 13.5L6.5 9L11 13.5L15.5 9" stroke="#F5C518" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        </svg>
      </span>
      <span className="font-black text-white text-xl" style={{ letterSpacing: '-0.03em' }}>
        Nextflow<span style={{ color: '#10B981' }}>.ai</span>
      </span>
    </span>
  )
}

export function ReelHeader() {
  return (
    <header style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="container-main">
        <nav className="flex items-center justify-between h-16 md:h-[72px]">
          <Link href="/" aria-label="Nextflow.ai — prima pagină">
            <Logo />
          </Link>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-white"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            @nextflow_agency.ai
          </a>
        </nav>
      </div>
    </header>
  )
}

export function ReelFooter() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="container-main py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
          © {new Date().getFullYear()} Nextflow.ai
        </p>
        <div className="flex gap-6 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          <Link href="/" className="transition-colors hover:text-white">
            Prima pagină
          </Link>
          <Link href="/reels/" className="transition-colors hover:text-white">
            Toate postările
          </Link>
          <a
            href="mailto:hello@nextflow.ai"
            className="transition-colors hover:text-white"
          >
            hello@nextflow.ai
          </a>
        </div>
      </div>
    </footer>
  )
}

export { INSTAGRAM_URL }
