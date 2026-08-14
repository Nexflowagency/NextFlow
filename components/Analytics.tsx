'use client'

import Script from 'next/script'
import { Suspense, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import {
  GA_ID,
  CLARITY_ID,
  analyticsEnabled,
  pageview,
} from '@/lib/analytics'

/**
 * Trimite un page_view la fiecare navigare client-side.
 *
 * useSearchParams() forțează render-ul pe client, deci trebuie izolat
 * într-un Suspense boundary — altfel `next build` scoate toată pagina din
 * static rendering.
 */
function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const query = searchParams.toString()
    pageview(query ? `${pathname}?${query}` : pathname)
  }, [pathname, searchParams])

  return null
}

/**
 * Încarcă GA4 și Microsoft Clarity.
 *
 * Fiecare tool se încarcă doar dacă ID-ul lui există în env, deci poți
 * porni cu unul singur. Fără ID-uri, componenta nu randează nimic — nu e
 * nevoie de cod condiționat în layout.
 */
export default function Analytics() {
  if (!analyticsEnabled) return null

  return (
    <>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { send_page_view: false });
            `}
          </Script>
          <Suspense fallback={null}>
            <PageViewTracker />
          </Suspense>
        </>
      )}

      {CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      )}
    </>
  )
}
