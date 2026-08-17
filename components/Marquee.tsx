const industries = [
  'Imobiliare',
  'Clinici estetice',
  'Agenții digitale',
  'E-commerce',
  'Servicii locale',
  'Consultanță',
  'Fitness',
  'Auto',
  'Construcții',
  'HoReCa',
]

export default function Marquee() {
  // Lista e dublată pentru bucla continuă (animația translatează cu -50%)
  const loop = [...industries, ...industries]

  return (
    <div
      className="marquee-track relative overflow-hidden border-y py-4"
      style={{ borderColor: 'var(--line)', background: 'var(--ink-1)' }}
      aria-label={`Industrii automatizate: ${industries.join(', ')}`}
    >
      <div className="marquee" aria-hidden="true">
        {loop.map((item, i) => (
          <span key={i} className="mono flex items-center whitespace-nowrap">
            <span style={{ color: 'var(--bone-46)' }}>{item}</span>
            <span
              className="mx-7 h-1 w-1 rounded-full"
              style={{ background: 'var(--acid)', opacity: 0.55 }}
            />
          </span>
        ))}
      </div>

      {/* Estompare pe margini ca textul să nu se taie brusc */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24"
        style={{ background: 'linear-gradient(to right, var(--ink-1), transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24"
        style={{ background: 'linear-gradient(to left, var(--ink-1), transparent)' }}
      />
    </div>
  )
}
