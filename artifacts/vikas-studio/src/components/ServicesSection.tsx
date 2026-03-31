import { useState } from "react";

const services = [
  {
    id: "wedding",
    href: "/services/wedding-photography",
    icon: "💍",
    title: "Wedding Photography",
    subtitle: "Timeless Elegance",
    description: "Capturing your timeless traditional elegance.",
    detail: "We document every sacred moment of your wedding day with sensitivity and artistry — from the first look to the last dance.",
    color: "#c9a227",
    accentBg: "rgba(201, 162, 39, 0.08)",
    accentBorder: "rgba(201, 162, 39, 0.3)",
    svgContent: (
      <svg viewBox="0 0 200 160" width="100%" height="100%" fill="none">
        {/* Ring with gem */}
        <circle cx="100" cy="90" r="45" stroke="url(#goldRingW)" strokeWidth="10" />
        <circle cx="100" cy="90" r="42" stroke="url(#goldRingW2)" strokeWidth="2" />
        {/* Diamond */}
        <polygon points="100,35 115,50 100,65 85,50" fill="url(#diamondGrad)" />
        <polygon points="100,35 115,50 100,42" fill="rgba(255,255,255,0.5)" />
        {/* Petals */}
        {[0,60,120,180,240,300].map((deg, i) => (
          <ellipse key={i}
            cx={100 + Math.cos(deg*Math.PI/180)*55}
            cy={90 + Math.sin(deg*Math.PI/180)*55}
            rx="5" ry="9"
            fill="rgba(255,200,100,0.4)"
            transform={`rotate(${deg+90},${100+Math.cos(deg*Math.PI/180)*55},${90+Math.sin(deg*Math.PI/180)*55})`}
          />
        ))}
        {/* Shine */}
        <ellipse cx="88" cy="42" rx="6" ry="4" fill="rgba(255,255,255,0.6)" transform="rotate(-20,88,42)" />
        <defs>
          <linearGradient id="goldRingW" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8c86a" /><stop offset="50%" stopColor="#c9a227" /><stop offset="100%" stopColor="#e8c86a" />
          </linearGradient>
          <linearGradient id="goldRingW2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.5)" /><stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="diamondGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a8dadc" /><stop offset="100%" stopColor="#1a7c8c" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "prewedding",
    href: "/services/pre-wedding",
    icon: "🌿",
    title: "Pre-Wedding Photography",
    subtitle: "Romantic Sessions",
    description: "Scenic and romantic pre-wedding sessions.",
    detail: "Breathtaking outdoor locations, cinematic lighting, and natural chemistry — tell your love story before the big day.",
    color: "#2e7d32",
    accentBg: "rgba(46, 125, 50, 0.08)",
    accentBorder: "rgba(46, 125, 50, 0.3)",
    svgContent: (
      <svg viewBox="0 0 200 160" width="100%" height="100%" fill="none">
        {/* Mountains */}
        <polygon points="20,140 70,60 120,140" fill="url(#mountain1)" />
        <polygon points="80,140 140,50 200,140" fill="url(#mountain2)" />
        {/* Sun */}
        <circle cx="155" cy="45" r="20" fill="url(#sunGrad)" />
        {[0,45,90,135,180,225,270,315].map((deg,i)=>(
          <line key={i}
            x1={155+Math.cos(deg*Math.PI/180)*24} y1={45+Math.sin(deg*Math.PI/180)*24}
            x2={155+Math.cos(deg*Math.PI/180)*32} y2={45+Math.sin(deg*Math.PI/180)*32}
            stroke="#e8c86a" strokeWidth="2.5" strokeLinecap="round"
          />
        ))}
        {/* Couple silhouette */}
        <ellipse cx="85" cy="118" rx="8" ry="18" fill="rgba(26,45,94,0.8)" />
        <circle cx="85" cy="95" r="7" fill="rgba(26,45,94,0.8)" />
        <ellipse cx="105" cy="118" rx="8" ry="18" fill="rgba(26,45,94,0.7)" />
        <circle cx="105" cy="95" r="7" fill="rgba(26,45,94,0.7)" />
        {/* Hearts */}
        <text x="90" y="82" fontSize="14" textAnchor="middle" fill="rgba(201,162,39,0.8)">♥</text>
        {/* Flowers */}
        {[[30,130],[170,125],[55,140]].map(([x,y],i)=>(
          <g key={i}>
            <circle cx={x} cy={y} r="5" fill="rgba(46,125,50,0.5)" />
            <circle cx={x-5} cy={y} r="3" fill="rgba(46,125,50,0.4)" />
            <circle cx={x+5} cy={y} r="3" fill="rgba(46,125,50,0.4)" />
          </g>
        ))}
        <defs>
          <linearGradient id="mountain1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a7c59" /><stop offset="100%" stopColor="#2d5a3d" />
          </linearGradient>
          <linearGradient id="mountain2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a6a48" /><stop offset="100%" stopColor="#1a4a2e" />
          </linearGradient>
          <radialGradient id="sunGrad">
            <stop offset="0%" stopColor="#ffe082" /><stop offset="100%" stopColor="#e8a000" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "films",
    href: "/services/wedding-films",
    icon: "🎬",
    title: "Wedding & Event Films",
    subtitle: "Cinematic Stories",
    description: "Crafting beautiful cinematic films of your events.",
    detail: "Professional 4K HDV cameras, drone footage, and masterful editing to create films you'll cherish forever.",
    color: "#1a2d5e",
    accentBg: "rgba(26, 45, 94, 0.06)",
    accentBorder: "rgba(26, 45, 94, 0.2)",
    svgContent: (
      <svg viewBox="0 0 200 160" width="100%" height="100%" fill="none">
        {/* Clapperboard */}
        <rect x="40" y="55" width="120" height="90" rx="6" fill="url(#boardBody)" />
        <rect x="40" y="55" width="120" height="28" rx="6" fill="url(#clapper)" />
        {/* Stripes */}
        {[0,1,2,3,4].map(i=>(
          <rect key={i} x={54+i*22} y="55" width="14" height="28" fill={i%2===0?"#ffffff":"#1a2d5e"} opacity="0.9" />
        ))}
        {/* Hinge */}
        <rect x="38" y="78" width="124" height="4" fill="rgba(0,0,0,0.2)" />
        {/* Screen lines */}
        <line x1="55" y1="100" x2="145" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="55" y1="112" x2="145" y2="112" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="55" y1="124" x2="145" y2="124" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        {/* Play button */}
        <circle cx="100" cy="113" r="18" fill="rgba(201,162,39,0.2)" stroke="rgba(201,162,39,0.6)" strokeWidth="2" />
        <polygon points="95,106 95,120 112,113" fill="rgba(201,162,39,0.8)" />
        {/* Film strip */}
        {[[-25,-10],[125,-10],[145,-10],[-45,-10]].map(([x],i)=>(
          <rect key={i} x={18+i*42} y="148" width="36" height="12" rx="2" fill="rgba(26,45,94,0.3)" />
        ))}
        <defs>
          <linearGradient id="boardBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a3f7a" /><stop offset="100%" stopColor="#1a2d5e" />
          </linearGradient>
          <linearGradient id="clapper" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a5090" /><stop offset="100%" stopColor="#2a3f7a" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "portrait",
    href: "/services/studio-portraiture",
    icon: "📷",
    title: "Studio Portraiture",
    subtitle: "Professional Portraits",
    description: "Professional portraits for families and individuals.",
    detail: "State-of-the-art studio lighting, backdrops, and expert direction for portraits that truly capture your personality.",
    color: "#c9a227",
    accentBg: "rgba(201, 162, 39, 0.08)",
    accentBorder: "rgba(201, 162, 39, 0.3)",
    svgContent: (
      <svg viewBox="0 0 200 160" width="100%" height="100%" fill="none">
        {/* Studio light stand */}
        <line x1="160" y1="40" x2="160" y2="140" stroke="#888" strokeWidth="4" />
        <line x1="140" y1="140" x2="180" y2="140" stroke="#888" strokeWidth="3" />
        {/* Umbrella */}
        <path d="M120,40 Q160,80 200,40 Q160,30 120,40Z" fill="url(#umbrellaGrad)" stroke="rgba(201,162,39,0.3)" strokeWidth="1" />
        {/* Light bulb */}
        <circle cx="160" cy="55" r="10" fill="url(#bulbGrad)" />
        <circle cx="157" cy="52" r="3" fill="rgba(255,255,255,0.5)" />
        {/* Light rays */}
        {[-30,-15,0,15,30].map((angle,i)=>(
          <line key={i}
            x1={160+Math.cos((90+angle)*Math.PI/180)*12}
            y1={55+Math.sin((90+angle)*Math.PI/180)*12}
            x2={160+Math.cos((90+angle)*Math.PI/180)*55}
            y2={55+Math.sin((90+angle)*Math.PI/180)*55}
            stroke="rgba(255,240,180,0.3)" strokeWidth="2"
          />
        ))}
        {/* Person silhouette */}
        <circle cx="75" cy="70" r="20" fill="url(#personGrad)" />
        <circle cx="75" cy="63" r="10" fill="url(#headGrad)" />
        <ellipse cx="75" cy="90" rx="12" ry="5" fill="rgba(26,45,94,0.1)" />
        {/* Camera frame outline */}
        <rect x="22" y="22" width="80" height="60" rx="5" fill="none" stroke="rgba(201,162,39,0.5)" strokeWidth="2" strokeDasharray="5,3" />
        <line x1="22" y1="45" x2="102" y2="45" stroke="rgba(201,162,39,0.3)" strokeWidth="1" />
        <line x1="62" y1="22" x2="62" y2="82" stroke="rgba(201,162,39,0.3)" strokeWidth="1" />
        <defs>
          <radialGradient id="umbrellaGrad">
            <stop offset="0%" stopColor="rgba(250,248,243,0.9)" /><stop offset="100%" stopColor="rgba(230,225,210,0.7)" />
          </radialGradient>
          <radialGradient id="bulbGrad">
            <stop offset="0%" stopColor="#fffde0" /><stop offset="100%" stopColor="#ffe57a" />
          </radialGradient>
          <linearGradient id="personGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(26,45,94,0.7)" /><stop offset="100%" stopColor="rgba(26,45,94,0.4)" />
          </linearGradient>
          <radialGradient id="headGrad">
            <stop offset="0%" stopColor="#d4a574" /><stop offset="100%" stopColor="#b8875a" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "gifts",
    href: "/services/photo-gifts",
    icon: "🎁",
    title: "Personalized Photo Gifts",
    subtitle: "Memory Keepsakes",
    description: "Transforming memories into gifts: Mugs, Keychains, Custom Albums.",
    detail: "Turn your favourite photos into beautiful personalized gifts — coffee mugs, photo keychains, custom albums and much more.",
    color: "#2e7d32",
    accentBg: "rgba(46, 125, 50, 0.08)",
    accentBorder: "rgba(46, 125, 50, 0.3)",
    svgContent: (
      <svg viewBox="0 0 200 160" width="100%" height="100%" fill="none">
        {/* Mug */}
        <rect x="30" y="65" width="55" height="65" rx="8" fill="url(#mugGrad)" />
        <path d="M85,80 Q105,80 105,97 Q105,114 85,114" stroke="url(#mugHandle)" strokeWidth="8" fill="none" strokeLinecap="round" />
        {/* Photo on mug */}
        <rect x="38" y="75" width="39" height="28" rx="3" fill="rgba(255,255,255,0.4)" />
        <text x="57" y="95" textAnchor="middle" fontSize="16">🌸</text>
        {/* Photo album */}
        <rect x="105" y="55" width="65" height="80" rx="6" fill="url(#albumGrad)" />
        <rect x="110" y="60" width="55" height="70" rx="4" fill="rgba(255,255,255,0.15)" />
        <rect x="115" y="65" width="45" height="30" rx="3" fill="rgba(255,255,255,0.4)" />
        <text x="137" y="88" textAnchor="middle" fontSize="18">💑</text>
        <line x1="115" y1="105" x2="160" y2="105" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <line x1="115" y1="112" x2="160" y2="112" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        {/* Keychain */}
        <circle cx="72" cy="42" r="14" fill="url(#keychainGrad)" />
        <text x="72" y="47" textAnchor="middle" fontSize="12">📸</text>
        <path d="M72,28 Q72,18 80,15" stroke="#888" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="82" cy="13" r="5" fill="none" stroke="#888" strokeWidth="2" />
        <defs>
          <linearGradient id="mugGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#388e3c" /><stop offset="100%" stopColor="#2e7d32" />
          </linearGradient>
          <linearGradient id="mugHandle" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#388e3c" /><stop offset="100%" stopColor="#2e7d32" />
          </linearGradient>
          <linearGradient id="albumGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9a227" /><stop offset="100%" stopColor="#9a7a1a" />
          </linearGradient>
          <radialGradient id="keychainGrad">
            <stop offset="0%" stopColor="#e8c86a" /><stop offset="100%" stopColor="#c9a227" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "frames",
    href: "/services/photo-frames",
    icon: "🖼️",
    title: "Photo Frames & Wall Art",
    subtitle: "Exquisite Art Pieces",
    description: "Exquisite framed art and albums.",
    detail: "Transform your favourite images into stunning wall art, premium frames, and beautifully bound photo albums for your home.",
    color: "#1a2d5e",
    accentBg: "rgba(201, 162, 39, 0.08)",
    accentBorder: "rgba(201, 162, 39, 0.3)",
    svgContent: (
      <svg viewBox="0 0 200 160" width="100%" height="100%" fill="none">
        {/* Large frame */}
        <rect x="20" y="20" width="100" height="120" rx="6" fill="url(#frame1Grad)" />
        <rect x="28" y="28" width="84" height="104" rx="3" fill="url(#photo1Grad)" />
        {/* Corner decorations */}
        {[[20,20],[120,20],[20,140],[120,140]].map(([x,y],i)=>(
          <g key={i}>
            <rect x={x-3} y={y-3} width="12" height="12" fill="none" stroke="#e8c86a" strokeWidth="2" />
          </g>
        ))}
        <text x="70" y="85" textAnchor="middle" fontSize="28">👰</text>
        {/* Small frame */}
        <rect x="132" y="20" width="60" height="55" rx="4" fill="url(#frame2Grad)" />
        <rect x="138" y="26" width="48" height="43" rx="2" fill="url(#photo2Grad)" />
        <text x="162" y="53" textAnchor="middle" fontSize="18">🌺</text>
        {/* Smaller frame */}
        <rect x="132" y="85" width="60" height="55" rx="4" fill="url(#frame3Grad)" />
        <rect x="138" y="91" width="48" height="43" rx="2" fill="url(#photo3Grad)" />
        <text x="162" y="118" textAnchor="middle" fontSize="18">🏔️</text>
        {/* Gold accent lines */}
        <line x1="128" y1="20" x2="128" y2="140" stroke="rgba(201,162,39,0.2)" strokeWidth="1" />
        <defs>
          <linearGradient id="frame1Grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8c86a" /><stop offset="50%" stopColor="#c9a227" /><stop offset="100%" stopColor="#e8c86a" />
          </linearGradient>
          <linearGradient id="photo1Grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2d6a4f" /><stop offset="100%" stopColor="#1a3d2e" />
          </linearGradient>
          <linearGradient id="frame2Grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c9a227" /><stop offset="100%" stopColor="#9a7a1a" />
          </linearGradient>
          <linearGradient id="photo2Grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8c86a" /><stop offset="100%" stopColor="#c9a227" />
          </linearGradient>
          <linearGradient id="frame3Grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2a4080" /><stop offset="100%" stopColor="#1a2d5e" />
          </linearGradient>
          <linearGradient id="photo3Grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a90d9" /><stop offset="100%" stopColor="#2a6ab0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={service.href}
      className="glass-card rounded-3xl overflow-hidden cursor-pointer block"
      style={{
        border: `1.5px solid ${hovered ? service.color + '60' : service.accentBorder}`,
        boxShadow: hovered
          ? `0 25px 60px rgba(26,45,94,0.15), 0 0 40px ${service.accentBg.replace('0.08', '0.3')}`
          : `0 8px 30px rgba(26,45,94,0.08)`,
        transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        textDecoration: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* SVG vignette */}
      <div className="h-[180px] relative overflow-hidden flex items-center justify-center p-4"
        style={{ background: `linear-gradient(135deg, ${service.accentBg}, rgba(255,255,255,0.5))` }}>
        <div className="w-full h-full max-w-[200px]">
          {service.svgContent}
        </div>

        {/* Gold corner frame */}
        <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[rgba(201,162,39,0.5)] rounded-tl-sm" />
        <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[rgba(201,162,39,0.5)] rounded-tr-sm" />
        <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[rgba(201,162,39,0.5)] rounded-bl-sm" />
        <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[rgba(201,162,39,0.5)] rounded-br-sm" />

        {/* Circular reflective gold border top-right */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border border-[rgba(201,162,39,0.1)]" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase font-medium mb-1"
              style={{ color: service.color }}>
              {service.subtitle}
            </div>
            <h3 className="text-[var(--studio-blue)] font-bold text-lg leading-tight">
              {service.title}
            </h3>
          </div>
          <span className="text-2xl">{service.icon}</span>
        </div>

        <div className="my-3 h-px bg-gradient-to-r from-[rgba(201,162,39,0.4)] to-transparent" />

        <p className="text-[var(--studio-blue)] font-medium text-sm mb-2 italic">
          "{service.description}"
        </p>
        <p className="text-[var(--studio-blue-light)] text-xs leading-relaxed opacity-75">
          {service.detail}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(201,162,39,0.3)] to-transparent" />
          <span
            className="text-xs font-semibold tracking-wide px-4 py-2 rounded-full transition-all inline-block"
            style={{
              color: service.color,
              border: `1px solid ${service.color}40`,
              background: service.accentBg,
            }}
          >
            View Gallery →
          </span>
        </div>
      </div>
    </a>
  );
}

export default function ServicesSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const prev = () => setStartIndex(Math.max(0, startIndex - 1));
  const next = () => setStartIndex(Math.min(services.length - visibleCount, startIndex + 1));

  return (
    <section id="services" className="services-gradient py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(46,125,50,0.3) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(201,162,39,0.4) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--studio-gold)]" />
            <span className="text-[var(--studio-green)] text-sm font-medium tracking-[0.3em] uppercase">Our Services</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--studio-gold)]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--studio-blue)] mb-3">
            Complete Photography
          </h2>
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--studio-blue)] mb-5">
            Solutions
          </h2>
          <p className="text-[var(--studio-blue-light)] max-w-xl mx-auto leading-relaxed opacity-80">
            From weddings to wall art, we offer a complete range of professional photography and videography services tailored to your needs.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full glass-card gold-border-glow flex items-center justify-center text-[var(--studio-blue)] font-bold text-xl transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
          >
            ‹
          </button>
          <button
            onClick={next}
            disabled={startIndex >= services.length - visibleCount}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full glass-card gold-border-glow flex items-center justify-center text-[var(--studio-blue)] font-bold text-xl transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
          >
            ›
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
            {services.slice(startIndex, startIndex + visibleCount).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={startIndex + i} />
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(Math.min(i, services.length - visibleCount))}
              className="h-2 rounded-full transition-all"
              style={{
                background: i >= startIndex && i < startIndex + visibleCount
                  ? 'var(--studio-gold)'
                  : 'rgba(26,45,94,0.2)',
                width: i >= startIndex && i < startIndex + visibleCount ? '24px' : '8px',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
