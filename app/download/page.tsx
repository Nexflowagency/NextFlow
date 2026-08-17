export default function DownloadPage() {
  return (
    <html lang="ro">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Descarcă — Nextflow.ai</title>
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: 'Archivo', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #0A0908;
            color: #EDE7DC;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            background-image:
              linear-gradient(to right, rgba(237,231,220,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(237,231,220,0.06) 1px, transparent 1px);
            background-size: 92px 92px;
          }
          .card {
            background: #0E0C0B;
            border: 1px solid rgba(237,231,220,0.09);
            border-radius: 6px;
            padding: 2.75rem 2.5rem;
            max-width: 420px;
            width: 100%;
          }
          .label {
            font-family: 'JetBrains Mono', ui-monospace, monospace;
            font-size: 0.625rem;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: #CCFF3D;
            margin-bottom: 1.75rem;
            display: block;
          }
          h1 {
            font-size: 1.5rem;
            font-weight: 800;
            letter-spacing: -0.035em;
            margin-bottom: 0.75rem;
          }
          p {
            color: rgba(237,231,220,0.46);
            font-size: 0.9375rem;
            line-height: 1.65;
            margin-bottom: 2rem;
          }
          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: #CCFF3D;
            color: #0A0908;
            font-size: 0.9375rem;
            font-weight: 600;
            letter-spacing: -0.01em;
            padding: 1rem 2rem;
            border-radius: 4px;
            text-decoration: none;
            width: 100%;
            transition: background 0.25s, transform 0.25s;
          }
          .btn:hover { background: #D8FF63; transform: translateY(-2px); }
          .btn:active { transform: translateY(0); }
          .meta {
            font-family: 'JetBrains Mono', ui-monospace, monospace;
            margin-top: 1.5rem;
            margin-bottom: 0;
            font-size: 0.625rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: rgba(237,231,220,0.3);
            padding-top: 1.5rem;
            border-top: 1px solid rgba(237,231,220,0.09);
          }
          .back {
            display: inline-block;
            margin-top: 1.5rem;
            font-size: 0.875rem;
            color: rgba(237,231,220,0.46);
            text-decoration: none;
          }
          .back:hover { color: #EDE7DC; }
        `}</style>
      </head>
      <body>
        <div className="card">
          <span className="label">Nextflow / sursă</span>

          <h1>Descarcă proiectul</h1>
          <p>
            Codul sursă complet al site-ului Nextflow.ai.
            <br />
            Next.js 16 + Tailwind CSS — gata de rulat.
          </p>

          <a href="/nextflow-ai.zip" download="nextflow-ai.zip" className="btn">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 2V12M9 12L5 8M9 12L13 8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M3 15H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Descarcă nextflow-ai.zip
          </a>

          <p className="meta">ZIP · fără autentificare</p>
          <a href="/" className="back">
            ← Înapoi la site
          </a>
        </div>
      </body>
    </html>
  )
}
