export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0B0B0B] border-t border-white/8" id="contact">
      <div className="container-main py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2 group w-fit">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/8 group-hover:bg-[#10B981] transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8L6 4L10 8L14 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L6 8L10 12L14 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                </svg>
              </span>
              <span className="text-white font-bold text-lg tracking-tight">
                Nextflow<span className="text-[#10B981]">.ai</span>
              </span>
            </a>
            <p className="text-[#4B5563] text-sm max-w-xs leading-relaxed">
              AI automation systems for businesses that want to scale without hiring more people.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-[#4B5563]">
            <a href="#solution" className="hover:text-white transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="mailto:hello@nextflow.ai" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Contact + CTA */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:hello@nextflow.ai"
              className="text-sm text-[#6B7280] hover:text-white transition-colors flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M1 5L7 8.5L13 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              hello@nextflow.ai
            </a>
            <a href="#cta" className="btn-primary text-sm px-5 py-2.5 w-fit">
              Book a Call
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#374151] text-xs">
            © {year} Nextflow.ai — All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-[#374151]">
            <a href="#" className="hover:text-[#6B7280] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#6B7280] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
