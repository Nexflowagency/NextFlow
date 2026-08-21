type Props = {
  /** Culoarea wordmark-ului și a liniei deschise pe fundal luminos */
  tone?: 'bone' | 'ink'
  /** Afișează textul „Nextflow.ai" lângă marcă */
  showWordmark?: boolean
  size?: number
  className?: string
}

/**
 * Marca Nextflow — două linii în zigzag, una deschisă și una verde, care
 * urcă împreună: fluxul afacerii înainte și după automatizare.
 *
 * Construcția e strictă: fiecare segment cade exact la 45°. Asta nu e
 * o toană — când toate segmentele au aceeași înclinare, o deplasare pe
 * verticală păstrează distanța dintre linii constantă pe tot traseul.
 * În varianta veche unghiurile erau întâmplătoare, așa că spațiul dintre
 * linii se strângea și se lărgea de la un segment la altul, iar marca
 * părea desenată din ochi.
 *
 * Fără degrade, fără halo, fără bulinele de la capete: la 36 de pixeli
 * nu se văd oricum, iar o marcă trebuie să reziste și dintr-un fax.
 * Capetele tăiate drept și colțurile ascuțite țin de aceeași familie cu
 * liniile subțiri și eticheta mono din restul site-ului.
 */
export default function Logo({
  tone = 'bone',
  showWordmark = true,
  size = 34,
  className = '',
}: Props) {
  const light = tone === 'bone' ? 'var(--bone)' : 'var(--on-paper)'

  /* Același traseu, coborât cu 12 unități. Vârfuri: +10, −6, +14 —
     ritm inegal, ca urcarea să aibă un puls, nu un dinte de ferăstrău. */
  const top = 'M2.5 20.5 L12.5 10.5 L18.5 16.5 L32.5 2.5'
  const bottom = 'M2.5 32.5 L12.5 22.5 L18.5 28.5 L32.5 14.5'

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg width={size} height={size} viewBox="0 0 35 35" fill="none" aria-hidden="true">
        <path
          d={bottom}
          stroke="var(--green)"
          strokeWidth="5"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
        <path
          d={top}
          stroke={light}
          strokeWidth="5"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
      </svg>

      {showWordmark && (
        <span
          className="font-display text-[1.125rem] font-bold tracking-[-0.02em]"
          style={{ color: light }}
        >
          Nextflow
          <span style={{ color: 'var(--green)' }}>.ai</span>
        </span>
      )}
    </span>
  )
}
