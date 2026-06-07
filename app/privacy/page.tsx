import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politică de Confidențialitate — NextFlow',
  description: 'Politica de confidențialitate NextFlow. Aflați cum colectăm, utilizăm și protejăm datele dumneavoastră personale.',
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm text-[#10B981] hover:underline mb-8 inline-block">
          ← Înapoi la pagina principală
        </Link>

        <h1 className="text-4xl font-black text-[#0B0B0B] mb-3 tracking-tight">
          Politică de Confidențialitate
        </h1>
        <p className="text-[#6B7280] text-sm mb-12">Ultima actualizare: iunie 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-[#374151] leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">1. Cine suntem</h2>
            <p>
              NextFlow (&quot;noi&quot;, &quot;ne&quot;, &quot;nostru&quot;) este o agenție de automatizare AI cu sediul în România.
              Ne puteți contacta la <a href="mailto:hello@nextflow.ro" className="text-[#10B981]">hello@nextflow.ro</a> sau
              la numărul <a href="tel:+40767422497" className="text-[#10B981]">+40 767 422 497</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">2. Ce date colectăm</h2>
            <p>Colectăm date pe care ni le furnizați direct, cum ar fi:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Nume și prenume</li>
              <li>Adresă de email</li>
              <li>Număr de telefon</li>
              <li>Informații despre afacerea dumneavoastră</li>
              <li>Mesajele trimise prin formularul de contact sau WhatsApp</li>
            </ul>
            <p className="mt-3">De asemenea, colectăm automat date tehnice (adresă IP, tip browser, pagini vizitate) prin cookies și instrumente de analiză.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">3. Cum utilizăm datele</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pentru a răspunde solicitărilor și a programa consultații</li>
              <li>Pentru a livra serviciile contractate</li>
              <li>Pentru a trimite comunicări comerciale (doar cu acordul dumneavoastră)</li>
              <li>Pentru a îmbunătăți site-ul și serviciile noastre</li>
              <li>Pentru a respecta obligațiile legale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">4. Baza legală a prelucrării</h2>
            <p>Prelucrăm datele dumneavoastră în baza:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Consimțământului</strong> — pentru comunicări de marketing</li>
              <li><strong>Executării unui contract</strong> — pentru livrarea serviciilor</li>
              <li><strong>Interesului legitim</strong> — pentru îmbunătățirea serviciilor</li>
              <li><strong>Obligației legale</strong> — unde legislația impune</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">5. Cât timp păstrăm datele</h2>
            <p>
              Păstrăm datele personale atâta timp cât este necesar pentru scopurile descrise mai sus,
              sau cât impune legislația aplicabilă. Datele clienților activi sunt păstrate pe durata
              contractului și 3 ani după încheierea acestuia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">6. Drepturile dumneavoastră (GDPR)</h2>
            <p>Conform Regulamentului GDPR, aveți dreptul la:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Acces</strong> — să solicitați o copie a datelor pe care le deținem</li>
              <li><strong>Rectificare</strong> — să corectați date inexacte</li>
              <li><strong>Ștergere</strong> — &quot;dreptul de a fi uitat&quot;</li>
              <li><strong>Restricționare</strong> — să limitați prelucrarea</li>
              <li><strong>Portabilitate</strong> — să primiți datele într-un format structurat</li>
              <li><strong>Opoziție</strong> — să vă opuneți prelucrării</li>
            </ul>
            <p className="mt-3">
              Pentru exercitarea acestor drepturi, contactați-ne la{' '}
              <a href="mailto:hello@nextflow.ro" className="text-[#10B981]">hello@nextflow.ro</a>.
              Aveți și dreptul de a depune o plângere la ANSPDCP (Autoritatea Națională de Supraveghere).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">7. Cookies</h2>
            <p>
              Site-ul nostru folosește cookies tehnice necesare funcționării și cookies analitice
              (Google Analytics) pentru a înțelege cum este utilizat site-ul. Puteți dezactiva cookies
              din setările browserului, însă unele funcționalități pot fi afectate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">8. Securitatea datelor</h2>
            <p>
              Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele personale
              împotriva accesului neautorizat, pierderii sau divulgării.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">9. Modificări ale politicii</h2>
            <p>
              Putem actualiza această politică periodic. Vom notifica modificările semnificative
              prin email sau printr-un anunț vizibil pe site. Data ultimei actualizări este afișată
              în partea de sus a acestei pagini.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B0B0B] mb-3">10. Contact</h2>
            <p>
              Pentru orice întrebări legate de această politică de confidențialitate, ne puteți contacta:
            </p>
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
