import ServicePage from "./ServicePage";
import GalleryGrid from "../components/GalleryGrid";
import type { GalleryImage } from "../components/GalleryGrid";

const images: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80", alt: "Couple in nature", caption: "Nature Romance" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80", alt: "Romantic couple shoot", caption: "Romantic Session" },
  { src: "https://images.unsplash.com/photo-1537907690979-ccd75d9d0834?auto=format&fit=crop&w=800&q=80", alt: "Couple at sunset", caption: "Golden Hour" },
  { src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80", alt: "Scenic outdoor shoot", caption: "Scenic Beauties" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80", alt: "Couple walking together", caption: "Our Journey" },
  { src: "https://images.unsplash.com/photo-1529293629920-e3f4cc1462e9?auto=format&fit=crop&w=800&q=80", alt: "Love story shoot", caption: "Love Story" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80", alt: "Pre-wedding portrait", caption: "Portrait Session" },
  { src: "https://images.unsplash.com/photo-1583178455843-b7f3d4cf26c0?auto=format&fit=crop&w=800&q=80", alt: "Romantic outdoor shoot", caption: "Outdoor Magic" },
  { src: "https://images.unsplash.com/photo-1620662398553-e25d79d96de0?auto=format&fit=crop&w=800&q=80", alt: "Couple mountain backdrop", caption: "Mountain Escape" },
];

export default function PreWeddingPage() {
  return (
    <ServicePage
      id="prewedding"
      icon="🌿"
      title="Pre-Wedding Photography"
      subtitle="Romantic Sessions"
      tagline="Scenic and romantic pre-wedding sessions."
      description="Breathtaking outdoor locations, cinematic lighting, and natural chemistry — tell your love story before the big day. We scout the most beautiful spots across Himachal Pradesh to create a dreamy pre-wedding album that's entirely your own."
      color="#2e7d32"
      accentBg="rgba(46, 125, 50, 0.08)"
      accentBorder="rgba(46, 125, 50, 0.3)"
    >
      <GalleryGrid images={images} />
    </ServicePage>
  );
}
