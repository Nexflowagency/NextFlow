export default function DownloadPage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Download — Nextflow.ai</title>
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
            background: #F9FAFB;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }
          .card {
            background: white;
            border: 1px solid #E5E7EB;
            border-radius: 20px;
            padding: 3rem 2.5rem;
            text-align: center;
            max-width: 420px;
            width: 100%;
            box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          }
          .icon {
            width: 64px;
            height: 64px;
            background: #F0FDF4;
            border: 1px solid #D1FAE5;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
          }
          h1 {
            font-size: 1.5rem;
            font-weight: 800;
            color: #0B0B0B;
            letter-spacing: -0.03em;
            margin-bottom: 0.5rem;
          }
          p {
            color: #6B7280;
            font-size: 0.9375rem;
            line-height: 1.6;
            margin-bottom: 2rem;
          }
          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: #0B0B0B;
            color: white;
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: -0.01em;
            padding: 0.9rem 2rem;
            border-radius: 12px;
            text-decoration: none;
            width: 100%;
            box-shadow: 0 2px 8px rgba(11,11,11,0.2);
            transition: background 0.15s, transform 0.15s, box-shadow 0.15s;
          }
          .btn:hover {
            background: #1a1a1a;
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(11,11,11,0.25);
          }
          .btn:active { transform: translateY(0); }
          .meta {
            margin-top: 1.25rem;
            font-size: 0.8125rem;
            color: #9CA3AF;
          }
          .back {
            display: inline-block;
            margin-top: 1.5rem;
            font-size: 0.875rem;
            color: #6B7280;
            text-decoration: none;
          }
          .back:hover { color: #0B0B0B; }
        `}</style>
      </head>
      <body>
        <div className="card">
          <div className="icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 4V18M14 18L9 13M14 18L19 13" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 22H23" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <h1>Download Project</h1>
          <p>
            Complete Nextflow.ai source code.<br />
            Next.js 16 + Tailwind CSS — ready to run.
          </p>

          <a href="/nextflow-ai.zip" download="nextflow-ai.zip" className="btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2V12M9 12L5 8M9 12L13 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 15H15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            Download nextflow-ai.zip
          </a>

          <p className="meta">40 KB · ZIP archive · No login required</p>
          <a href="/" className="back">← Back to website</a>
        </div>
      </body>
    </html>
  )
}
