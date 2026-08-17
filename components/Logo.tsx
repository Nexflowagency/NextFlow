type Props = {
  /** Culoarea wordmark-ului (ignorată dacă wordmark-ul e ascuns) */
  tone?: 'bone' | 'ink'
  /** Afișează textul „Nextflow.ai" lângă marcă */
  showWordmark?: boolean
  size?: number
  /** Prefix unic pentru id-urile din <defs> — evită coliziuni când marca apare de mai multe ori */
  uid?: string
  className?: string
}

/**
 * Marca Nextflow — două linii în zigzag, una albă și una verde, care urcă
 * împreună: fluxul afacerii înainte și după automatizare. Peste ideea de
 * bază: degrade pe linia verde, o urmă estompată care sugerează mișcarea
 * și noduri la capete, ca linia să pară un traseu viu, nu un simplu chevron.
 */
export default function Logo({
  tone = 'bone',
  showWordmark = true,
  size = 34,
  uid = 'nf',
  className = '',
}: Props) {
  const textColor = tone === 'bone' ? 'var(--bone)' : 'var(--on-paper)'

  const gGreen = `${uid}-green`
  const gWhite = `${uid}-white`
  const fGlow = `${uid}-glow`

  // Același traseu, decalat pe verticală: sus alb, jos verde
  const top = 'M5 23 L16 11 L27 21 L43 7'
  const bottom = 'M5 35 L16 23 L27 33 L43 19'

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 42"
        fill="none"
        aria-hidden="true"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <linearGradient id={gGreen} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--green-deep)" />
            <stop offset="55%" stopColor="var(--green)" />
            <stop offset="100%" stopColor="var(--green-soft)" />
          </linearGradient>

          <linearGradient id={gWhite} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor={tone === 'bone' ? '#C9C2B5' : '#4A4540'} />
            <stop offset="100%" stopColor={tone === 'bone' ? '#FFFFFF' : '#131110'} />
          </linearGradient>

          <filter id={fGlow} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.6" />
          </filter>
        </defs>

        {/* Urma estompată — dă senzația de mișcare, nu se vede ca element separat */}
        <g filter={`url(#${fGlow})`} opacity="0.5">
          <path d={bottom} stroke="var(--green)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Linia verde */}
        <path
          d={bottom}
          stroke={`url(#${gGreen})`}
          strokeWidth="5.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Linia albă */}
        <path
          d={top}
          stroke={`url(#${gWhite})`}
          strokeWidth="5.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Noduri la capetele din dreapta — punctul în care traseul „ajunge" */}
        <circle cx="43" cy="7" r="1.9" fill={tone === 'bone' ? '#FFFFFF' : '#131110'} />
        <circle cx="43" cy="19" r="1.9" fill="var(--green-soft)" />
      </svg>

      {showWordmark && (
        <span
          className="font-display text-[1.125rem] font-bold tracking-[-0.02em]"
          style={{ color: textColor }}
        >
          Nextflow
          <span style={{ color: 'var(--green)' }}>.ai</span>
        </span>
      )}
    </span>
  )
}
