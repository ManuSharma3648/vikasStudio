import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Branches", href: "#branches" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(250, 248, 243, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201, 162, 39, 0.2)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(26, 45, 94, 0.08)' : 'none',
      }}
    >
      <div className="container mx-auto px-6 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Aperture icon */}
          <div className="w-10 h-10 rounded-full flex items-center justify-center relative"
            style={{ background: 'linear-gradient(135deg, var(--studio-blue) 0%, var(--studio-blue-light) 100%)' }}>
            <svg viewBox="0 0 40 40" width="24" height="24" fill="none">
              <circle cx="20" cy="20" r="8" stroke="rgba(201,162,39,0.8)" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="4" fill="rgba(201,162,39,0.6)" />
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <line
                  key={deg}
                  x1="20" y1="20"
                  x2={20 + Math.cos(deg * Math.PI / 180) * 12}
                  y2={20 + Math.sin(deg * Math.PI / 180) * 12}
                  stroke="rgba(201,162,39,0.5)" strokeWidth="0.8"
                />
              ))}
            </svg>
          </div>
          <div>
            <div className="text-[var(--studio-blue)] font-bold text-base leading-tight tracking-wider">VIKAS STUDIO</div>
            <div className="text-[var(--studio-gold)] text-[9px] tracking-[0.25em] uppercase leading-none">Digital Studio</div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[var(--studio-blue)] text-sm font-medium tracking-wider hover:text-[var(--studio-gold)] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--studio-gold)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a href="#contact" className="hidden md:block">
          <button className="btn-gold px-6 py-2.5 rounded-full text-sm font-semibold text-[var(--studio-blue)] tracking-wide">
            Book Session
          </button>
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[var(--studio-blue)] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-card border-t border-[rgba(201,162,39,0.2)] px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-[var(--studio-blue)] font-medium tracking-wider hover:text-[var(--studio-gold)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact">
            <button className="btn-gold w-full py-3 rounded-full text-sm font-semibold text-[var(--studio-blue)]">
              Book Session
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}
