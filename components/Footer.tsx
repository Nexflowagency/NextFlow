export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#0B0B0B', borderTop: '1px solid rgba(255,255,255,0.07)' }} id="contact">
      <div className="container-main py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2.5 group w-fit">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300"
                style={{ background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.2)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 9L6.5 4.5L11 9L15.5 4.5" stroke="#F5C518" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 13.5L6.5 9L11 13.5L15.5 9" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
                </svg>
              </span>
              <span className="font-black text-white text-xl" style={{ letterSpacing: '-0.03em' }}>
                Nextflow<span style={{ color: '#F5C518' }}>.ai</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              AI automation systems for businesses that want to scale without hiring more people.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
            {[
              { label: 'Services', href: '#solution' },
              { label: 'How It Works', href: '#how-it-works' },
              { label: 'Testimonials', href: '#testimonials' },
              { label: 'Contact', href: 'mailto:hello@nextflow.ai' },
            ].map(link => (
              <a key={link.label} href={link.href}
                className="transition-colors"
                onMouseEnter={e => (e.currentTarget.style.color = '#F5C518')}
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
              onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M1 5L7 8.5L13 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              hello@nextflow.ai
            </a>
            <a href="#cta" className="btn-primary text-sm px-5 py-2.5 w-fit">
              Book a Call
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © {year} Nextflow.ai — All rights reserved.
          </p>
          <div className="flex gap-5 text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
