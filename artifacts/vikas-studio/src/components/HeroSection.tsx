import { useEffect, useRef } from "react";

function AnimatedCamera() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let animId: number;
    const animate = () => {
      frame++;
      if (containerRef.current) {
        const rotY = Math.sin(frame * 0.008) * 12;
        const rotX = Math.sin(frame * 0.005) * 5;
        const floatY = Math.sin(frame * 0.012) * 10;
        containerRef.current.style.transform = `translateY(${floatY}px) rotateY(${rotY}deg) rotateX(${rotX}deg)`;
      }
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="camera-3d w-full h-full flex items-center justify-center"
      style={{ perspective: '1000px', transformStyle: 'preserve-3d', transition: 'transform 0.1s ease-out' }}
    >
      <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
        {/* Main camera SVG illustration */}
        <svg viewBox="0 0 480 320" width="460" height="307" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Golden glow behind camera */}
          <ellipse cx="300" cy="170" rx="160" ry="120" fill="url(#goldGlow)" />

          {/* Camera body main */}
          <rect x="120" y="80" width="260" height="160" rx="16" fill="url(#bodyGrad)" />
          <rect x="124" y="84" width="252" height="152" rx="14" fill="none" stroke="rgba(201,162,39,0.3)" strokeWidth="1" />

          {/* Gold accent stripe top */}
          <rect x="120" y="80" width="260" height="6" rx="3" fill="url(#goldStripe)" />

          {/* Lens barrel */}
          <ellipse cx="175" cy="160" rx="65" ry="65" fill="url(#lensGrad)" />
          <ellipse cx="175" cy="160" rx="65" ry="65" fill="none" stroke="rgba(201,162,39,0.5)" strokeWidth="2" />
          <ellipse cx="175" cy="160" rx="50" ry="50" fill="url(#lensInner)" />
          <ellipse cx="175" cy="160" rx="50" ry="50" fill="none" stroke="rgba(201,162,39,0.3)" strokeWidth="1" />
          <ellipse cx="175" cy="160" rx="35" ry="35" fill="url(#lensDeep)" />
          <ellipse cx="175" cy="160" rx="20" ry="20" fill="#0a1628" />
          {/* Lens reflection */}
          <ellipse cx="168" cy="152" rx="6" ry="4" fill="rgba(255,255,255,0.4)" />

          {/* Gold lens ring */}
          <ellipse cx="175" cy="160" rx="65" ry="65" fill="none" stroke="url(#goldRingStroke)" strokeWidth="3" />

          {/* LCD screen on side */}
          <rect x="310" y="100" width="55" height="42" rx="4" fill="#111827" />
          <rect x="313" y="103" width="49" height="36" rx="3" fill="#1a4a2e" />
          {/* Parrot on screen */}
          <ellipse cx="332" cy="117" rx="8" ry="10" fill="#e53935" />
          <ellipse cx="340" cy="114" rx="6" ry="8" fill="#43a047" />
          <ellipse cx="348" cy="116" rx="5" ry="7" fill="#1e88e5" />
          <ellipse cx="336" cy="126" rx="9" ry="5" fill="#ffb300" />

          {/* Screen label */}
          <rect x="310" y="145" width="55" height="12" rx="2" fill="rgba(201,162,39,0.2)" />
          <text x="337" y="154" textAnchor="middle" fill="rgba(201,162,39,0.8)" fontSize="7" fontFamily="monospace">SONY HDV</text>

          {/* Handle on top */}
          <rect x="175" y="55" width="175" height="28" rx="8" fill="url(#handleGrad)" />

          {/* Viewfinder */}
          <rect x="340" y="58" width="38" height="22" rx="4" fill="#5a5a5a" />
          <rect x="342" y="60" width="34" height="18" rx="3" fill="#1a2d5e" />

          {/* Microphone */}
          <rect x="215" y="38" width="8" height="20" rx="4" fill="#4a4a4a" />
          <ellipse cx="219" cy="36" rx="5" ry="5" fill="#888" />

          {/* Control buttons */}
          <circle cx="360" cy="130" r="6" fill="#e53935" />
          <circle cx="380" cy="130" r="4" fill="#888" />
          <rect x="350" y="145" width="40" height="5" rx="2.5" fill="#666" />

          {/* HDV logo */}
          <rect x="245" y="105" width="48" height="18" rx="3" fill="#1a2d5e" />
          <text x="269" y="118" textAnchor="middle" fill="rgba(201,162,39,0.9)" fontSize="9" fontWeight="bold" fontFamily="sans-serif">HDV</text>

          {/* Bottom feet */}
          <rect x="135" y="237" width="30" height="6" rx="3" fill="rgba(0,0,0,0.2)" />
          <rect x="325" y="237" width="30" height="6" rx="3" fill="rgba(0,0,0,0.2)" />

          <defs>
            <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(201,162,39,0.25)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <linearGradient id="bodyGrad" x1="120" y1="80" x2="380" y2="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#9a9a9a" />
              <stop offset="40%" stopColor="#787878" />
              <stop offset="100%" stopColor="#5a5a5a" />
            </linearGradient>
            <linearGradient id="goldStripe" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(201,162,39,0.4)" />
              <stop offset="50%" stopColor="rgba(232,200,106,0.8)" />
              <stop offset="100%" stopColor="rgba(201,162,39,0.4)" />
            </linearGradient>
            <radialGradient id="lensGrad" cx="40%" cy="40%">
              <stop offset="0%" stopColor="#8a8a8a" />
              <stop offset="100%" stopColor="#3a3a3a" />
            </radialGradient>
            <radialGradient id="lensInner" cx="40%" cy="40%">
              <stop offset="0%" stopColor="#6a6a6a" />
              <stop offset="100%" stopColor="#2a2a2a" />
            </radialGradient>
            <radialGradient id="lensDeep" cx="40%" cy="40%">
              <stop offset="0%" stopColor="#3a3a3a" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </radialGradient>
            <linearGradient id="goldRingStroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e8c86a" />
              <stop offset="50%" stopColor="#c9a227" />
              <stop offset="100%" stopColor="#e8c86a" />
            </linearGradient>
            <linearGradient id="handleGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7a7a7a" />
              <stop offset="100%" stopColor="#5a5a5a" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating golden particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { left: '15%', top: '20%', size: 4, delay: '0s' },
            { left: '80%', top: '15%', size: 3, delay: '0.8s' },
            { left: '85%', top: '65%', size: 5, delay: '1.5s' },
            { left: '10%', top: '75%', size: 3, delay: '2.3s' },
            { left: '50%', top: '5%', size: 4, delay: '0.5s' },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                background: 'var(--studio-gold)',
                opacity: 0.6,
                animationDelay: p.delay,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
      {/* Background decorative rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-[22%] -translate-y-1/2 w-[580px] h-[580px] rounded-full border border-[rgba(201,162,39,0.12)] animate-spin-slow" />
        <div className="absolute top-1/2 right-[22%] -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[rgba(201,162,39,0.18)]" style={{ animation: 'spin-slow 15s linear infinite reverse' }} />
        <div className="absolute top-1/2 right-[22%] -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-[rgba(201,162,39,0.22)]" />

        {/* Golden light blob top right */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full animate-radiate"
          style={{ background: 'radial-gradient(ellipse, rgba(201,162,39,0.15) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

        {/* Golden light blob bottom left */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(201,162,39,0.10) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

        {/* Aperture pattern background bottom-left */}
        <div className="absolute bottom-10 left-10 opacity-4">
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            <circle cx="90" cy="90" r="80" stroke="#1a2d5e" strokeWidth="1.5" />
            <circle cx="90" cy="90" r="60" stroke="#1a2d5e" strokeWidth="1" />
            <circle cx="90" cy="90" r="40" stroke="#1a2d5e" strokeWidth="0.8" />
            <line x1="90" y1="10" x2="90" y2="170" stroke="#1a2d5e" strokeWidth="0.8" />
            <line x1="10" y1="90" x2="170" y2="90" stroke="#1a2d5e" strokeWidth="0.8" />
            <line x1="33" y1="33" x2="147" y2="147" stroke="#1a2d5e" strokeWidth="0.8" />
            <line x1="147" y1="33" x2="33" y2="147" stroke="#1a2d5e" strokeWidth="0.8" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        {/* Left: Text content */}
        <div className="animate-slide-up">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--studio-gold)]" />
            <span className="text-[var(--studio-gold)] text-sm font-medium tracking-[0.3em] uppercase">Photography & Videography</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-[var(--studio-blue)] leading-tight tracking-wide">
            VIKAS
            <span className="block text-4xl lg:text-6xl tracking-widest">STUDIO</span>
          </h1>

          <div className="mt-2 mb-6 flex items-center gap-3">
            <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-[var(--studio-gold)] to-transparent" />
          </div>

          <p className="text-[var(--studio-blue)] text-xl lg:text-2xl italic font-light tracking-wide mb-2">
            A name of complete photography solutions.
          </p>

          <p className="text-[var(--studio-blue-light)] text-base leading-relaxed mb-8 max-w-md opacity-80">
            Capturing life's most precious moments with cinematic artistry.
            From timeless weddings to professional portraits — your memories, our passion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <button className="btn-gold px-8 py-4 rounded-full text-[var(--studio-blue)] font-semibold text-lg tracking-wide cursor-pointer">
                ✦ Book Your Session
              </button>
            </a>
            <a href="#services">
              <button className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg tracking-wide cursor-pointer">
                View Services
              </button>
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "2", label: "Studio Branches" },
              { value: "1000+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-[var(--studio-blue)]">{stat.value}</div>
                <div className="text-xs text-[var(--studio-blue-light)] opacity-70 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Animated Camera */}
        <div className="relative h-[400px] lg:h-[500px] animate-fade-in">
          {/* Outer glow rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[340px] h-[340px] rounded-full border-2 border-[rgba(201,162,39,0.2)] animate-radiate" />
            <div className="absolute w-[250px] h-[250px] rounded-full border border-[rgba(201,162,39,0.3)]" style={{ animationDelay: '1s' }} />
          </div>

          <AnimatedCamera />

          {/* Overlay: HDV badge */}
          <div className="absolute bottom-4 right-4 glass-card gold-border-glow rounded-2xl px-4 py-3 text-center">
            <div className="text-[var(--studio-blue)] font-bold text-lg tracking-widest">HDV</div>
            <div className="text-[var(--studio-gold)] text-xs tracking-[0.2em]">4K STUDIO</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgba(240,249,241,0.3)] to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[var(--studio-blue)] text-xs tracking-[0.2em] opacity-60">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--studio-blue)] to-transparent opacity-40" />
      </div>
    </section>
  );
}
