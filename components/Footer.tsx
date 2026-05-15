// ACTUALIZEAZĂ cu linkul tău real de Instagram:
const INSTAGRAM_URL = 'https://www.instagram.com/nextflowai'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#0B0B0B', borderTop: '1px solid rgba(255,255,255,0.07)' }} id="contact">
      <div className="container-main py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2.5 group w-fit">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300"
                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 9L6.5 4.5L11 9L15.5 4.5" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 13.5L6.5 9L11 13.5L15.5 9" stroke="#F5C518" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
                </svg>
              </span>
              <span className="font-black text-white text-xl" style={{ letterSpacing: '-0.03em' }}>
                Nextflow<span style={{ color: '#10B981' }}>.ai</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Sisteme AI de automatizare pentru afaceri care vor să crească fără să angajeze mai mult personal.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
            {[
              { label: 'Servicii', href: '#solution' },
              { label: 'Cum Funcționează', href: '#how-it-works' },
              { label: 'Testimoniale', href: '#testimonials' },
              { label: 'Contact', href: 'mailto:hello@nextflow.ai' },
            ].map(link => (
              <a key={link.label} href={link.href}
                className="transition-colors"
                onMouseEnter={e => (e.currentTarget.style.color = '#10B981')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}>
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3">
            <a href="mailto:hello@nextflow.ai"
              className="text-sm flex items-center gap-2 transition-colors"
              style={{ color: 'rgba(255,255,255,0.35)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#10B981')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M1 5L7 8.5L13 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              hello@nextflow.ai
            </a>
            <a href="#cta" className="btn-primary text-sm px-5 py-2.5 w-fit">
              Programează un Call
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © {year} Nextflow.ai — Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-5">
            {/* Instagram */}
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs transition-colors"
              style={{ color: 'rgba(255,255,255,0.2)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#E1306C')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.2)')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              Instagram
            </a>
            <a href="#" className="text-xs hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.2)' }}>Politică de Confidențialitate</a>
            <a href="#" className="text-xs hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.2)' }}>Termeni și Condiții</a>
          </div>
        </div>
      </div>
    </footer>
  )
}