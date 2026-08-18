'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

const projects = [
  {
    n: '01',
    name: 'Dermiq',
    domain: 'dermiqbacau.ro',
    url: 'https://dermiqbacau.ro/',
    sector: 'Cosmetică & skincare · Bacău',
    shot: '/proiecte/dermiq.jpg',
    description:
      'Un site calm și curat pentru un cabinet de cosmetică, cu accent pe tratamente și programări simple.',
  },
  {
    n: '02',
    name: 'Esthea',
    domain: 'esthea.ro',
    url: 'https://esthea.ro/',
    sector: 'Cabinet estetic',
    shot: '/proiecte/esthea.jpg',
    description:
      'O experiență cinematică, cu animații fine la scroll și un aer de lux discret, de la prima secundă.',
  },
  {
    n: '03',
    name: 'Prestige Beauty Salon',
    domain: 'prestigebeautysalon',
    url: 'https://marvelous-lollipop-4bfd92.netlify.app/',
    sector: 'Salon de înfrumusețare · Suceava',
    shot: '/proiecte/prestige.jpg',
    description:
      'Coafor, machiaj, cosmetică, laser și unghii sub un singur brand — cu galerie de transformări înainte–după și programare directă.',
  },
  {
    n: '04',
    name: 'Contour Collective',
    domain: 'contourcollective',
    url: 'https://monumental-chaja-082d0c.netlify.app/',
    sector: 'Coafor & frizerie · Cluj-Napoca',
    shot: '/proiecte/contour.jpg',
    description:
      'Un brand îndrăzneț pentru un coafor din Cluj — galerie de lucrări, echipă și rezervări directe.',
  },
]

export default function Portfolio() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="proiecte"
      className="section relative overflow-hidden"
      style={{ background: 'var(--ink)' }}
    >
      <div className="shell relative" ref={ref}>
        {/* ── Antet ── */}
        <div className="g12 mb-14 items-end gap-y-8">
          <div className="col-span-12 lg:col-span-8">
            <p className="mono eyebrow reveal mb-7">Proiecte livrate</p>
            <h2 className="display d-lg reveal d1">
              Site-uri pe care
              <br />
              <span style={{ color: 'var(--bone-30)' }}>le-am construit.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10">
            <p
              className="reveal d2 border-t pt-6 text-[0.9375rem] leading-relaxed"
              style={{ color: 'var(--bone-46)', borderColor: 'var(--line-mid)' }}
            >
              Apasă pe oricare ca să-l vezi live, exact așa cum îl vede clientul
              tău.
            </p>
          </div>
        </div>

        {/* ── Cardurile cu capturi ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={p.n}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`panel shot-card reveal d${i + 1} group flex flex-col overflow-hidden`}
            >
              <span className="tick tick-tl" aria-hidden="true" />
              <span className="tick tick-br" aria-hidden="true" />

              {/* Bară de browser — face captura să pară un site real, nu o poză */}
              <div
                className="flex items-center gap-2.5 border-b px-4 py-3"
                style={{ borderColor: 'var(--line)', background: 'var(--ink-2)' }}
              >
                <span className="flex gap-1.5" aria-hidden="true">
                  {['#3A3330', '#3A3330', '#3A3330'].map((c, j) => (
                    <span
                      key={j}
                      className="block h-2 w-2 rounded-full"
                      style={{ background: c }}
                    />
                  ))}
                </span>
                <span
                  className="mono-sm truncate rounded-[3px] px-2 py-1"
                  style={{ background: 'var(--ink)', color: 'var(--bone-30)' }}
                >
                  {p.domain}
                </span>
              </div>

              {/* Captura paginii principale */}
              <div className="shot-window relative overflow-hidden" style={{ aspectRatio: '1280 / 800' }}>
                <img
                  src={p.shot}
                  alt={`Pagina principală a site-ului ${p.name} — ${p.sector}`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="shot-img h-full w-full object-cover object-top"
                />
              </div>

              {/* Informații */}
              <div className="flex flex-1 flex-col p-7">
                <span className="mono-sm mb-3" style={{ color: 'var(--bone-30)' }}>
                  {p.sector}
                </span>
                <h3 className="display d-sm mb-3" style={{ color: 'var(--bone)' }}>
                  {p.name}
                </h3>
                <p
                  className="mb-6 flex-1 text-[0.9375rem] leading-relaxed"
                  style={{ color: 'var(--bone-46)' }}
                >
                  {p.description}
                </p>

                <span
                  className="mono-sm inline-flex items-center gap-2"
                  style={{ color: 'var(--green)' }}
                >
                  Vezi site-ul live
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 13L13 5M13 5H6M13 5V12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
