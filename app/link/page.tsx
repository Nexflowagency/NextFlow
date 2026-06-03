import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'NextFlow · Link in Bio',
  description: 'Automatizare AI pentru afaceri românești. 50+ businessuri automatizate.',
  openGraph: {
    title: 'NextFlow AI',
    description: 'Automatizare AI pentru afaceri românești.',
    url: 'https://nextflow.ro/link',
  },
}

const links = [
  {
    href: 'https://nextflow.ro/#cta',
    label: 'Vreau un Demo Gratuit',
    sub: 'Gratuit · Fără obligații',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
      </svg>
    ),
    primary: true,
  },
  {
    href: 'https://nextflow.ro',
    label: 'Vizitează Site-ul',
    sub: 'nextflow.ro',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    primary: false,
  },
  {
    href: 'https://wa.me/40700000000',
    label: 'Scrie-ne pe WhatsApp',
    sub: 'Răspundem în < 1 oră',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
    primary: false,
  },
]

export default function LinkPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-5 py-12"
      style={{ background: '#0B0B0B' }}
    >
      {/* Ambient glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(245,197,24,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-8">

        {/* Avatar */}
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center"
            style={{
              border: '2.5px solid rgba(245,197,24,0.5)',
              background: '#111111',
              boxShadow: '0 0 0 6px rgba(245,197,24,0.08)',
            }}
          >
            <Image
              src="/profile-instagram.svg"
              alt="NextFlow logo"
              width={96}
              height={96}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>

          <div className="text-center">
            <h1 className="text-white font-black text-xl tracking-tight">NextFlow AI</h1>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Automatizare AI · România
            </p>

            {/* Social proof pill */}
            <div
              className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.25)',
                color: '#10B981',
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: '#10B981', boxShadow: '0 0 0 2px rgba(16,185,129,0.3)' }}
              />
              50+ afaceri automatizate
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
          {links.map((link) =>
            link.primary ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-[#0B0B0B] transition-all duration-200 active:scale-95"
                style={{
                  background: '#F5C518',
                  boxShadow: '0 4px 20px rgba(245,197,24,0.35)',
                }}
              >
                <span className="shrink-0">{link.icon}</span>
                <div className="flex flex-col min-w-0">
                  <span className="text-[15px] leading-tight">{link.label}</span>
                  <span className="text-xs font-normal opacity-60 mt-0.5">{link.sub}</span>
                </div>
                <svg
                  className="ml-auto shrink-0"
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8H13M9 4L13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-semibold text-white transition-all duration-200 active:scale-95"
                style={{
                  background: '#111111',
                  border: '1px solid rgba(255,255,255,0.09)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                }}
              >
                <span className="shrink-0" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {link.icon}
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="text-[15px] leading-tight">{link.label}</span>
                  <span
                    className="text-xs font-normal mt-0.5"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                  >
                    {link.sub}
                  </span>
                </div>
                <svg
                  className="ml-auto shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                >
                  <path
                    d="M3 8H13M9 4L13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )
          )}
        </div>

        {/* Footer */}
        <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.2)' }}>
          nextflow.ro
        </p>
      </div>
    </main>
  )
}
