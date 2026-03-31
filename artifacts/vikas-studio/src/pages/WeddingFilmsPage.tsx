import ServicePage from "./ServicePage";
import GalleryGrid from "../components/GalleryGrid";
import type { GalleryImage } from "../components/GalleryGrid";

const images: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=80", alt: "Cinematic camera setup", caption: "Cinematic Setup" },
  { src: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80", alt: "Wedding film moment", caption: "Captured Moment" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", alt: "Bride and groom film still", caption: "Film Still" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80", alt: "Wedding ceremony film", caption: "Ceremony Film" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80", alt: "Event coverage", caption: "Event Coverage" },
  { src: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?auto=format&fit=crop&w=800&q=80", alt: "Drone aerial shot", caption: "Aerial Footage" },
  { src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=800&q=80", alt: "Reception film coverage", caption: "Reception Coverage" },
  { src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80", alt: "Cinematic wedding shot", caption: "Cinematic Moment" },
  { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80", alt: "Wedding film highlight", caption: "Highlight Reel" },
];

export default function WeddingFilmsPage() {
  return (
    <ServicePage
      id="films"
      icon="🎬"
      title="Wedding & Event Films"
      subtitle="Cinematic Stories"
      tagline="Crafting beautiful cinematic films of your events."
      description="Professional 4K HDV cameras, drone footage, and masterful editing to create films you'll cherish forever. From highlight reels to full-length feature films, we capture the emotion, music, and magic of your most important events with cinematic excellence."
      color="#1a2d5e"
      accentBg="rgba(26, 45, 94, 0.06)"
      accentBorder="rgba(26, 45, 94, 0.2)"
    >
      <GalleryGrid images={images} />
    </ServicePage>
  );
}
