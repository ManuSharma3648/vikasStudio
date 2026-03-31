import { useEffect, useRef } from "react";

function StorefrontSVG({ color, initial }: { color: string; initial: string }) {
  const ref = useRef<SVGGElement>(null);
  useEffect(() => {
    let frame = 0;
    let animId: number;
    const animate = () => {
      frame++;
      if (ref.current) {
        const rotY = Math.sin(frame * 0.01) * 4;
        ref.current.style.transform = `skewX(${rotY}deg)`;
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <svg viewBox="0 0 320 200" width="100%" height="100%" fill="none" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`buildingGrad${initial}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#faf8f3" /><stop offset="100%" stopColor="#f0ede4" />
        </linearGradient>
        <linearGradient id={`upperGrad${initial}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" /><stop offset="100%" stopColor="#f5f2ea" />
        </linearGradient>
        <linearGradient id={`roofGrad${initial}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={color + 'cc'} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={color + 'cc'} />
        </linearGradient>
        <filter id={`glow${initial}`}>
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id={`windowGlow${initial}`}>
          <stop offset="0%" stopColor="rgba(255,240,180,0.6)" />
          <stop offset="100%" stopColor="rgba(255,240,180,0.1)" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="160" cy="198" rx="120" ry="6" fill="rgba(26,45,94,0.08)" />

      {/* Building base */}
      <rect x="40" y="100" width="240" height="90" rx="4" fill={`url(#buildingGrad${initial})`} stroke="rgba(201,162,39,0.2)" strokeWidth="1" />

      {/* Upper floor */}
      <rect x="55" y="50" width="210" height="55" rx="4" fill={`url(#upperGrad${initial})`} stroke="rgba(201,162,39,0.15)" strokeWidth="1" />

      {/* Roof */}
      <rect x="35" y="42" width="250" height="12" rx="4" fill={`url(#roofGrad${initial})`} />
      <rect x="35" y="42" width="250" height="2" fill="rgba(201,162,39,0.4)" />

      {/* Signboard */}
      <rect x="65" y="60" width="190" height="34" rx="4" fill={color} opacity="0.9" />
      <text x="160" y="72" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="sans-serif" letterSpacing="3">VIKAS DIGITAL STUDIO</text>
      <text x="160" y="86" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="7" fontFamily="sans-serif">Photography & Videography</text>

      {/* Awning */}
      <rect x="40" y="96" width="240" height="10" rx="2" fill={color} opacity="0.7" />
      {/* Awning stripes */}
      {[60,90,120,150,180,210,240].map((x,i)=>(
        <line key={i} x1={x} y1="96" x2={x-8} y2="106" stroke="rgba(255,255,255,0.4)" strokeWidth="4" />
      ))}

      {/* Main door */}
      <rect x="130" y="130" width="60" height="60" rx="4" fill={color} opacity="0.15" stroke={color} strokeWidth="1.5" />
      <rect x="137" y="137" width="45" height="53" rx="3" fill={color} opacity="0.1" />
      {/* Door handle */}
      <circle cx="170" cy="162" r="3" fill={color} opacity="0.7" />

      {/* Windows ground floor */}
      {[60, 210].map((x, i) => (
        <g key={i}>
          <rect x={x} y="128" width="55" height="42" rx="3" fill={`url(#windowGlow${initial})`} stroke="rgba(201,162,39,0.3)" strokeWidth="1" />
          <line x1={x+27} y1="128" x2={x+27} y2="170" stroke="rgba(201,162,39,0.2)" strokeWidth="1" />
          <line x1={x} y1="149" x2={x+55} y2="149" stroke="rgba(201,162,39,0.2)" strokeWidth="1" />
        </g>
      ))}

      {/* Upper windows */}
      {[65, 200].map((x, i) => (
        <rect key={i} x={x} y="56" width="48" height="30" rx="2" fill={`url(#windowGlow${initial})`} stroke="rgba(201,162,39,0.25)" strokeWidth="1" />
      ))}

      {/* Steps */}
      <rect x="100" y="188" width="120" height="8" rx="2" fill="rgba(0,0,0,0.08)" />
      <rect x="110" y="192" width="100" height="5" rx="1" fill="rgba(0,0,0,0.05)" />

      {/* Lamp */}
      <line x1="85" y1="42" x2="85" y2="100" stroke="#aaa" strokeWidth="2" />
      <ellipse cx="85" cy="103" rx="12" ry="6" fill="rgba(255,240,150,0.4)" />
      <circle cx="85" cy="100" r="5" fill="rgba(255,240,150,0.8)" filter={`url(#glow${initial})`} />

      {/* Map pin */}
      <g style={{ animation: 'float 3s ease-in-out infinite' }}>
        <circle cx="265" cy="18" r="12" fill={color} />
        <polygon points="265,30 259,20 271,20" fill={color} />
        <circle cx="265" cy="18" r="5" fill="white" opacity="0.8" />
      </g>
    </svg>
  );
}

export default function BranchesSection() {
  return (
    <section id="branches" className="contact-gradient py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center opacity-4">
          <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
            <circle cx="300" cy="300" r="280" stroke="#1a2d5e" strokeWidth="1.5" />
            <circle cx="300" cy="300" r="200" stroke="#1a2d5e" strokeWidth="1" />
            <circle cx="300" cy="300" r="120" stroke="#1a2d5e" strokeWidth="0.8" />
            <line x1="300" y1="20" x2="300" y2="580" stroke="#1a2d5e" strokeWidth="0.8" />
            <line x1="20" y1="300" x2="580" y2="300" stroke="#1a2d5e" strokeWidth="0.8" />
            <line x1="102" y1="102" x2="498" y2="498" stroke="#1a2d5e" strokeWidth="0.8" />
            <line x1="498" y1="102" x2="102" y2="498" stroke="#1a2d5e" strokeWidth="0.8" />
          </svg>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[rgba(201,162,39,0.4)] to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--studio-gold)]" />
            <span className="text-[var(--studio-gold)] text-sm font-medium tracking-[0.3em] uppercase">Find Us</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--studio-gold)]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--studio-blue)] mb-4">
            Our Branches
          </h2>
          <p className="text-[var(--studio-blue-light)] max-w-lg mx-auto opacity-80">
            Two conveniently located studios ready to serve you across Himachal Pradesh.
          </p>
        </div>

        {/* Branches grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Hamirpur Branch */}
          <div className="glass-card rounded-3xl overflow-hidden gold-border-glow">
            <div className="h-[220px] px-6 pt-6 pb-2">
              <StorefrontSVG color="#1a2d5e" initial="H" />
            </div>
            <div className="p-8 pt-4">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: 'var(--studio-blue)' }}>H</div>
                <div>
                  <div className="text-[var(--studio-gold)] text-xs tracking-[0.2em] uppercase font-medium">Branch 01</div>
                  <h3 className="text-[var(--studio-blue)] font-bold text-xl">Hamirpur</h3>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <span className="text-[var(--studio-gold)] mt-1 text-lg">📍</span>
                <p className="text-[var(--studio-blue)] font-medium leading-relaxed">
                  Koushal Complex Near Deep & Co.,<br />
                  Main Bazar Hamirpur (H.P.)
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(201,162,39,0.2)] flex items-center gap-2 text-sm text-[var(--studio-blue-light)] opacity-70">
                <span>🕐</span>
                <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Mehre Branch */}
          <div className="glass-card rounded-3xl overflow-hidden gold-border-glow">
            <div className="h-[220px] px-6 pt-6 pb-2">
              <StorefrontSVG color="#2e7d32" initial="M" />
            </div>
            <div className="p-8 pt-4">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: 'var(--studio-green)' }}>M</div>
                <div>
                  <div className="text-[var(--studio-gold)] text-xs tracking-[0.2em] uppercase font-medium">Branch 02</div>
                  <h3 className="text-[var(--studio-blue)] font-bold text-xl">Mehre</h3>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-4">
                <span className="text-[var(--studio-gold)] mt-1 text-lg">📍</span>
                <p className="text-[var(--studio-blue)] font-medium leading-relaxed">
                  First Floor Above PNB Bank,<br />
                  Near Bus Stand, Mehre
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(201,162,39,0.2)] flex items-center gap-2 text-sm text-[var(--studio-blue-light)] opacity-70">
                <span>🕐</span>
                <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Panel */}
        <div id="contact" className="glass-card gold-border-glow rounded-3xl p-10 text-center max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--studio-gold)]" />
              <span className="text-[var(--studio-gold)] text-sm tracking-[0.3em] uppercase font-medium">Contact Us</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--studio-gold)]" />
            </div>
            <h3 className="text-[var(--studio-blue)] text-3xl font-bold">Get In Touch</h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {/* WhatsApp / Mobile */}
            <div className="flex flex-col items-center gap-3 p-5 rounded-2xl"
              style={{ background: 'rgba(46,125,50,0.08)', border: '1px solid rgba(46,125,50,0.2)' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(46,125,50,0.15)' }}>
                <svg viewBox="0 0 24 24" width="28" height="28" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <div className="text-[var(--studio-green)] text-xs font-semibold tracking-wide uppercase mb-1">Mobile / WhatsApp</div>
                <a href="tel:+919218720401" className="text-[var(--studio-green)] font-bold text-xl hover:underline">
                  92187-20401
                </a>
              </div>
            </div>

            {/* Shop Contact */}
            <div className="flex flex-col items-center gap-3 p-5 rounded-2xl"
              style={{ background: 'rgba(46,125,50,0.08)', border: '1px solid rgba(46,125,50,0.2)' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{ background: 'rgba(46,125,50,0.15)' }}>
                📞
              </div>
              <div>
                <div className="text-[var(--studio-green)] text-xs font-semibold tracking-wide uppercase mb-1">Shop Contact</div>
                <a href="tel:+917807020401" className="text-[var(--studio-green)] font-bold text-xl hover:underline">
                  78070-20401
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center gap-3 p-5 rounded-2xl"
              style={{ background: 'rgba(26,45,94,0.06)', border: '1px solid rgba(26,45,94,0.15)' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(46,125,50,0.12)' }}>
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#2e7d32" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className="text-[var(--studio-blue)] text-xs font-semibold tracking-wide uppercase mb-1">Email</div>
                <a href="mailto:vikasstudio72@gmail.com" className="text-[var(--studio-blue)] font-bold text-sm hover:underline break-all">
                  vikasstudio72@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a href="tel:+919218720401">
              <button className="btn-gold px-10 py-4 rounded-full text-[var(--studio-blue)] font-semibold text-lg tracking-wide">
                ✦ Book Your Session Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
