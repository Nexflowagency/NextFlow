import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Termeni și Condiții — NextFlow',
  description: 'Termenii și condițiile de utilizare a serviciilor NextFlow — agenție automatizare AI România.',
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm text-[#10B981] hover:underline mb-8 inline-block">
          ← Înapoi la pagina principală
        </Link>

        <h1 className="text-4xl font-black text-[#0B0B0B] mb-3 tracking-tight">
          Termeni și Condiții
        </h1>
        <p className="text-[#6B7280] text-sm mb-12">Ultima actualizare: iunie 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-[#374151] leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">1. Părțile contractante</h2>
            <p>
              Acești Termeni și Condiții guvernează relația dintre NextFlow (&quot;Prestator&quot;) și
              orice persoană fizică sau juridică (&quot;Client&quot;) care utilizează site-ul nextflow.ro
              sau serviciile oferite de NextFlow.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">2. Serviciile oferite</h2>
            <p>NextFlow oferă servicii de automatizare AI, inclusiv dar fără a se limita la:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Implementare agenți vocali AI</li>
              <li>Dezvoltare chatboți pentru website</li>
              <li>Automatizare CRM și pipeline de vânzări</li>
              <li>Automatizare Social Media</li>
              <li>Campanii Email și WhatsApp Marketing</li>
              <li>Calendar și programare automată</li>
            </ul>
            <p className="mt-3">
              Detaliile specifice ale serviciilor, livrabilele și termenele sunt stabilite în oferta
              comercială și contractul semnat cu fiecare client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">3. Prețuri și plată</h2>
            <p>
              Prețurile sunt stabilite individual în funcție de complexitatea proiectului.
              Consultația inițială este gratuită. Plata se efectuează conform condițiilor stipulate
              în contractul individual, de regulă parțial în avans și parțial la livrare.
            </p>
            <p className="mt-3">
              NextFlow își rezervă dreptul de a modifica prețurile pentru servicii noi. Contractele
              în derulare nu sunt afectate de modificările de preț.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">4. Drepturi de proprietate intelectuală</h2>
            <p>
              La finalizarea plății integrale, clientul dobândește dreptul de utilizare a sistemelor
              livrate. NextFlow păstrează dreptul de a folosi tehnologiile și metodologiile generice
              dezvoltate în cadrul proiectelor în activitatea sa viitoare.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">5. Confidențialitate și NDA</h2>
            <p>
              Ambele părți se obligă să păstreze confidențialitatea informațiilor comerciale și
              tehnice ale celeilalte părți. La cerere, NextFlow poate semna un acord de
              nedivulgare (NDA) înainte de consultație.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">6. Termene de implementare</h2>
            <p>
              Termenele orientative de implementare sunt de 2–4 săptămâni, în funcție de complexitatea
              proiectului și disponibilitatea informațiilor din partea clientului. Termenele exacte
              sunt stabilite în contractul individual.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">7. Suport post-implementare</h2>
            <p>
              NextFlow oferă suport tehnic după livrare conform condițiilor stipulate în contract.
              Modificările semnificative ale sistemelor livrate pot face obiectul unor costuri suplimentare.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">8. Limitarea răspunderii</h2>
            <p>
              NextFlow nu poate fi responsabilă pentru pierderi indirecte, accidentale sau
              consecvente rezultate din utilizarea sau imposibilitatea utilizării serviciilor.
              Răspunderea totală a NextFlow nu poate depăși valoarea contractului aferent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">9. Forța majoră</h2>
            <p>
              Niciuna dintre părți nu este răspunzătoare pentru întârzieri sau neexecutarea
              obligațiilor cauzate de evenimente de forță majoră (calamități naturale, pandemii,
              perturbări ale infrastructurii internet etc.).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">10. Legislație aplicabilă</h2>
            <p>
              Acești termeni sunt guvernați de legislația română. Orice litigiu va fi soluționat
              pe cale amiabilă sau, în caz contrar, de instanțele competente din România.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">11. Contact</h2>
            <p>Pentru orice întrebări legate de acești termeni:</p>
            <ul className="list-none mt-2 space-y-1">
              <li>Email: <a href="mailto:hello@nextflow.ro" className="text-[#10B981]">hello@nextflow.ro</a></li>
              <li>Telefon: <a href="tel:+40767422497" className="text-[#10B981]">+40 767 422 497</a></li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
