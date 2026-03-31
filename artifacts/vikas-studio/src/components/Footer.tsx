export default function Footer() {
  return (
    <footer className="bg-[var(--studio-blue)] py-14 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="2" />
            <circle cx="200" cy="200" r="130" stroke="white" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="80" stroke="white" strokeWidth="1" />
            <circle cx="200" cy="200" r="30" stroke="white" strokeWidth="1" />
            <line x1="200" y1="20" x2="200" y2="380" stroke="white" strokeWidth="0.8" />
            <line x1="20" y1="200" x2="380" y2="200" stroke="white" strokeWidth="0.8" />
            <line x1="73" y1="73" x2="327" y2="327" stroke="white" strokeWidth="0.8" />
            <line x1="327" y1="73" x2="73" y2="327" stroke="white" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Golden glow top center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(201,162,39,0.6) 0%, transparent 70%)' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="text-center mb-10">
          {/* Logo */}
          <div className="inline-flex flex-col items-center">
            {/* Camera aperture icon */}
            <div className="mb-4 opacity-70">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="28" stroke="rgba(201,162,39,0.6)" strokeWidth="1.5" />
                <circle cx="30" cy="30" r="20" stroke="rgba(201,162,39,0.4)" strokeWidth="1" />
                <circle cx="30" cy="30" r="12" stroke="rgba(201,162,39,0.5)" strokeWidth="1" />
                <circle cx="30" cy="30" r="5" fill="rgba(201,162,39,0.4)" />
                {/* Aperture blades */}
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <line
                    key={i}
                    x1="30" y1="30"
                    x2={30 + Math.cos(deg * Math.PI / 180) * 18}
                    y2={30 + Math.sin(deg * Math.PI / 180) * 18}
                    stroke="rgba(201,162,39,0.5)" strokeWidth="1"
                  />
                ))}
              </svg>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-wide">
              VIKAS
            </h2>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-[0.15em]"
              style={{ color: 'var(--studio-gold)' }}>
              DIGITAL STUDIO
            </h2>
            <p className="mt-2 text-white/60 text-sm italic tracking-wide">
              A name of complete photography solutions.
            </p>
          </div>
        </div>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-[rgba(201,162,39,0.5)]" />
          <div className="w-2 h-2 rounded-full bg-[var(--studio-gold)]" />
          <div className="h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-[rgba(201,162,39,0.5)]" />
        </div>

        {/* Contact details */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-[var(--studio-green-light)] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Mobile / WhatsApp</div>
            <a href="tel:+919218720401" className="text-[#4caf50] font-bold text-xl hover:text-[#81c784] transition-colors">
              92187-20401
            </a>
          </div>
          <div className="text-center">
            <div className="text-[var(--studio-green-light)] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Shop Contact</div>
            <a href="tel:+917807020401" className="text-[#4caf50] font-bold text-xl hover:text-[#81c784] transition-colors">
              78070-20401
            </a>
          </div>
          <div className="text-center">
            <div className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase mb-2">Email</div>
            <a href="mailto:vikasstudio72@gmail.com"
              className="text-white font-medium text-sm hover:text-[var(--studio-gold)] transition-colors break-all">
              vikasstudio72@gmail.com
            </a>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-white/60 text-sm">
          {['Home', 'Services', 'Branches', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item === 'Home' ? '' : item.toLowerCase()}`}
              className="hover:text-[var(--studio-gold)] transition-colors tracking-wider"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 text-center">
          <div className="flex items-center justify-center gap-3 mb-1">
            <div className="h-px w-8 bg-[rgba(201,162,39,0.3)]" />
            <span className="text-white/40 text-xs tracking-[0.2em]">EST. HAMIRPUR H.P.</span>
            <div className="h-px w-8 bg-[rgba(201,162,39,0.3)]" />
          </div>
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Vikas Digital Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
