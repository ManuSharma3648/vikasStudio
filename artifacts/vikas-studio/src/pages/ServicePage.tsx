import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export type ServicePageProps = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  color: string;
  accentBg: string;
  accentBorder: string;
  children?: React.ReactNode;
};

export default function ServicePage({
  id,
  icon,
  title,
  subtitle,
  tagline,
  description,
  color,
  accentBg,
  accentBorder,
  children,
}: ServicePageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Cinzel', 'Georgia', serif" }}>
      <Navbar />

      {/* Hero Banner */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${accentBg.replace('0.08', '0.18')} 0%, transparent 60%),
                       radial-gradient(ellipse at 30% 30%, rgba(201,162,39,0.08) 0%, transparent 50%),
                       linear-gradient(135deg, #faf8f3 0%, #f5f0e6 50%, #faf8f3 100%)`,
        }}
      >
        {/* Decorative rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[rgba(201,162,39,0.12)] animate-spin-slow"
            style={{ transform: 'translate(30%, -50%)' }}
          />
          <div
            className="absolute top-1/2 right-0 w-[360px] h-[360px] rounded-full border border-[rgba(201,162,39,0.18)]"
            style={{ transform: 'translate(30%, -50%)' }}
          />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-30"
            style={{ background: `radial-gradient(ellipse, ${accentBg.replace('0.08', '0.4')} 0%, transparent 70%)`, transform: 'translate(-30%, 30%)' }} />
          {/* Aperture bottom right */}
          <div className="absolute bottom-6 right-8 opacity-5">
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none">
              <circle cx="70" cy="70" r="65" stroke="#1a2d5e" strokeWidth="1.5" />
              <circle cx="70" cy="70" r="48" stroke="#1a2d5e" strokeWidth="1" />
              <circle cx="70" cy="70" r="30" stroke="#1a2d5e" strokeWidth="0.8" />
              <line x1="70" y1="5" x2="70" y2="135" stroke="#1a2d5e" strokeWidth="0.8" />
              <line x1="5" y1="70" x2="135" y2="70" stroke="#1a2d5e" strokeWidth="0.8" />
              <line x1="24" y1="24" x2="116" y2="116" stroke="#1a2d5e" strokeWidth="0.8" />
              <line x1="116" y1="24" x2="24" y2="116" stroke="#1a2d5e" strokeWidth="0.8" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <a href="/" className="text-[var(--studio-blue-light)] hover:text-[var(--studio-gold)] transition-colors opacity-70">
              Home
            </a>
            <span className="text-[rgba(201,162,39,0.5)]">›</span>
            <a href="/#services" className="text-[var(--studio-blue-light)] hover:text-[var(--studio-gold)] transition-colors opacity-70">
              Services
            </a>
            <span className="text-[rgba(201,162,39,0.5)]">›</span>
            <span className="text-[var(--studio-blue)] font-medium">{title}</span>
          </div>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--studio-gold)]" />
              <span className="tracking-[0.3em] uppercase text-sm font-medium" style={{ color }}>
                {subtitle}
              </span>
            </div>

            <div className="flex items-start gap-5 mb-6">
              <span className="text-5xl mt-1">{icon}</span>
              <h1 className="text-4xl lg:text-6xl font-bold text-[var(--studio-blue)] leading-tight">
                {title}
              </h1>
            </div>

            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-full max-w-[180px] bg-gradient-to-r from-[var(--studio-gold)] to-transparent" />
            </div>

            <p className="text-[var(--studio-blue)] text-xl italic font-light tracking-wide mb-4">
              "{tagline}"
            </p>
            <p className="text-[var(--studio-blue-light)] text-base leading-relaxed max-w-xl opacity-80 mb-8">
              {description}
            </p>

            <a href="/#contact">
              <button className="btn-gold px-8 py-3.5 rounded-full text-[var(--studio-blue)] font-semibold text-base tracking-wide">
                ✦ Book This Service
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery / Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--studio-gold)]" />
              <span className="text-[var(--studio-gold)] text-xs font-medium tracking-[0.3em] uppercase">Our Work</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--studio-gold)]" />
            </div>
            <h2 className="text-3xl font-bold text-[var(--studio-blue)]">Portfolio Gallery</h2>
          </div>

          {/* Gallery grid — populated by each service page */}
          {children}
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-16"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${accentBg.replace('0.08', '0.12')} 0%, transparent 70%),
                       linear-gradient(135deg, #faf8f3 0%, #fff9f0 100%)`,
        }}
      >
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-[var(--studio-blue)] mb-3">
            Ready to create beautiful memories?
          </h3>
          <p className="text-[var(--studio-blue-light)] mb-8 opacity-80">
            Contact us today to discuss your {title.toLowerCase()} requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919218720401">
              <button className="btn-gold px-8 py-3.5 rounded-full text-[var(--studio-blue)] font-semibold tracking-wide">
                ✦ Call / WhatsApp: 92187-20401
              </button>
            </a>
            <a href="/#services">
              <button className="btn-primary px-8 py-3.5 rounded-full text-white font-semibold tracking-wide">
                ← All Services
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
