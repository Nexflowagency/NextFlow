'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'

/* Explicat pe cât se poate de simplu: o scenă concretă din ziua clientului,
   nu descrieri tehnice. Fără cuvinte precum „workflow" sau „integrare". */
const services = [
  {
    n: '01',
    title: 'Un site care îți aduce clienți',
    plain:
      'Îți facem un site care arată bine pe telefon și îi face pe oameni să te contacteze. Nu unul care doar stă frumos și nu aduce nimic.',
    win: 'Te găsesc pe Google',
    wide: true,
  },
  {
    n: '02',
    title: 'Un robot care răspunde în locul tău',
    plain:
      'Cineva îți scrie la 11 noaptea. Robotul răspunde pe loc, îi zice prețul și îl trece în programări. Tu dormi.',
    win: 'Răspuns în 10 secunde',
  },
  {
    n: '03',
    title: 'Un robot care vorbește la telefon',
    plain:
      'Sună cineva exact când ai un client în scaun. Robotul răspunde, vorbește normal ca un om și îi dă o programare.',
    win: 'Zero apeluri pierdute',
  },
  {
    n: '04',
    title: 'Calendarul se completează singur',
    plain:
      'Programările intră direct în calendar. Clientul primește confirmare și un memento cu o zi înainte, ca să nu uite.',
    win: 'Fără dublă programare',
  },
  {
    n: '05',
    title: 'O listă cu toți clienții tăi',
    plain:
      'Toți clienții și toate mesajele într-un singur loc. Dacă cineva nu a mai venit de trei luni, sistemul îi scrie singur.',
    win: 'Clienții se întorc',
  },
]

export default function Services() {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <section
      id="servicii"
      className="section relative overflow-hidden"
      style={{ background: 'var(--paper)', color: 'var(--on-paper)' }}
    >
      <div
        className="blueprint blueprint-paper"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 55% at 50% 0%, #000 10%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 55% at 50% 0%, #000 10%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="shell relative" ref={ref}>
        {/* ── Antet ── */}
        <div className="g12 mb-14 items-end gap-y-8 lg:mb-20">
          <div className="col-span-12 lg:col-span-8">
            <p className="mono eyebrow eyebrow-paper reveal mb-7">Ce facem, pe scurt</p>
            <h2 className="display d-lg reveal d1">
              Punem roboți să facă
              <br />
              <span style={{ color: 'var(--on-paper-40)' }}>munca plictisitoare.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10">
            <p
              className="reveal d2 border-t pt-6 text-[1rem] leading-relaxed"
              style={{ color: 'var(--on-paper-64)', borderColor: 'var(--line-paper)' }}
            >
              Tu faci ce știi tu mai bine. Restul — mesaje, telefoane,
              programări, aduceri aminte — le face sistemul.
            </p>
          </div>
        </div>

        {/* ── Cardurile ── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.n}
              className={`panel-paper reveal d${(i % 5) + 1} flex flex-col p-8 sm:p-10 ${
                s.wide ? 'md:col-span-2' : ''
              }`}
            >
              <div className="mb-7 flex items-start justify-between gap-4">
                <span
                  className="display leading-none"
                  style={{ fontSize: '2.5rem', color: 'rgba(19,17,16,0.14)' }}
                >
                  {s.n}
                </span>
                {/* Marcaj tip textmarker — singurul loc unde verdele apare pe hârtie */}
                <span
                  className="mono-sm rounded-[3px] px-2.5 py-1.5"
                  style={{ background: 'var(--green)', color: 'var(--ink)' }}
                >
                  {s.win}
                </span>
              </div>

              <h3 className={`display mb-4 ${s.wide ? 'd-md' : 'd-sm'}`}>{s.title}</h3>
              <p
                className={`leading-relaxed ${s.wide ? 'max-w-[52ch] text-[1.0625rem]' : 'text-[1rem]'}`}
                style={{ color: 'var(--on-paper-64)' }}
              >
                {s.plain}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
