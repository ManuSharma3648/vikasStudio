import ServicePage from "./ServicePage";
import GalleryGrid from "../components/GalleryGrid";
import type { GalleryImage } from "../components/GalleryGrid";

const images: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80", alt: "Professional portrait", caption: "Studio Portrait" },
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80", alt: "Portrait of woman", caption: "Elegant Portrait" },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80", alt: "Portrait of man", caption: "Professional Headshot" },
  { src: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=800&q=80", alt: "Family portrait", caption: "Family Moments" },
  { src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80", alt: "Woman portrait session", caption: "Personality Captured" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80", alt: "Professional headshot", caption: "Corporate Headshot" },
  { src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=800&q=80", alt: "Child portrait", caption: "Childhood Joy" },
  { src: "https://images.unsplash.com/photo-1570158268183-d296b2892211?auto=format&fit=crop&w=800&q=80", alt: "Portrait with studio light", caption: "Studio Light Magic" },
  { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80", alt: "Confident portrait", caption: "Confidence & Grace" },
];

export default function StudioPortraiturePage() {
  return (
    <ServicePage
      id="portrait"
      icon="📷"
      title="Studio Portraiture"
      subtitle="Professional Portraits"
      tagline="Professional portraits for families and individuals."
      description="State-of-the-art studio lighting, backdrops, and expert direction for portraits that truly capture your personality. Whether it's a family portrait, corporate headshot, or personal milestone — our studio creates images that tell your story beautifully."
      color="#c9a227"
      accentBg="rgba(201, 162, 39, 0.08)"
      accentBorder="rgba(201, 162, 39, 0.3)"
    >
      <GalleryGrid images={images} />
    </ServicePage>
  );
}
