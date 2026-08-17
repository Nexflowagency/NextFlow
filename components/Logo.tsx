type Props = {
  /** Culoarea textului wordmark-ului */
  tone?: 'bone' | 'ink'
  className?: string
}

/**
 * Marca Nextflow — un mic graf de flux: un nod sursă care se ramifică
 * în două noduri de ieșire. Ține de conceptul "sistem", nu de un chevron generic.
 */
export default function Logo({ tone = 'bone', className = '' }: Props) {
  const text = tone === 'bone' ? 'var(--bone)' : 'var(--on-paper)'
  const dim = tone === 'bone' ? 'var(--bone-30)' : 'rgba(19,17,16,0.3)'

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        {/* traseele */}
        <path
          d="M4 11H9C10 11 10.5 10.5 11 9.5L12.5 6.5C13 5.5 13.5 5 14.5 5H18"
          stroke={dim}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M4 11H9C10 11 10.5 11.5 11 12.5L12.5 15.5C13 16.5 13.5 17 14.5 17H18"
          stroke="var(--acid)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* noduri */}
        <circle cx="3" cy="11" r="2" fill="var(--acid)" />
        <circle cx="19" cy="5" r="1.6" fill={dim} />
        <circle cx="19" cy="17" r="1.6" fill="var(--acid)" />
      </svg>
      <span
        className="font-display text-[1.0625rem] font-extrabold tracking-[-0.04em]"
        style={{ color: text }}
      >
        Nextflow
        <span style={{ color: 'var(--acid)' }}>.ai</span>
      </span>
    </span>
  )
}
