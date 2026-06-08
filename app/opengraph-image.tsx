import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'NextFlow Agency — Automatizare AI pentru Afaceri'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#070D1A',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(22,196,127,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(22,196,127,0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          display: 'flex',
        }} />

        {/* Gold glow */}
        <div style={{
          position: 'absolute', top: '-100px', right: '100px',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)',
          display: 'flex',
        }} />

        {/* Green glow */}
        <div style={{
          position: 'absolute', bottom: '-100px', left: '100px',
          width: '300px', height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22,196,127,0.15) 0%, transparent 70%)',
          display: 'flex',
        }} />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
          <div style={{
            width: '56px', height: '56px', borderRadius: '14px',
            background: 'rgba(212,175,55,0.15)',
            border: '1px solid rgba(212,175,55,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="28" height="28" viewBox="0 0 18 18" fill="none">
              <path d="M2 9L6.5 4.5L11 9L15.5 4.5" stroke="#D4AF37" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 13.5L6.5 9L11 13.5L15.5 9" stroke="#F0D060" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.85"/>
            </svg>
          </div>
          <span style={{ color: '#fff', fontSize: '32px', fontWeight: '700', letterSpacing: '-0.02em' }}>
            NextFlow<span style={{ color: '#D4AF37' }}>.ro</span>
          </span>
        </div>

        {/* Heading */}
        <h1 style={{
          color: '#fff', fontSize: '58px', fontWeight: '800',
          letterSpacing: '-0.03em', textAlign: 'center',
          margin: '0 0 16px', lineHeight: 1.1,
          maxWidth: '900px',
        }}>
          Automatizare <span style={{ color: '#D4AF37' }}>AI</span> pentru<br/>afaceri din România
        </h1>

        {/* Subtitle */}
        <p style={{
          color: 'rgba(255,255,255,0.55)', fontSize: '24px',
          textAlign: 'center', margin: '0 0 40px', maxWidth: '700px',
        }}>
          Agenți vocali · CRM automatizat · Chatboți inteligenți
        </p>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '48px' }}>
          {[['50+', 'Clienți'], ['200+', 'Automatizări'], ['98%', 'Satisfacție']].map(([num, label]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#D4AF37', fontSize: '32px', fontWeight: '800' }}>{num}</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '16px' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
