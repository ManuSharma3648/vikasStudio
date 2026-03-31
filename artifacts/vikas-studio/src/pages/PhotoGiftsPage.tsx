import ServicePage from "./ServicePage";
import GalleryGrid from "../components/GalleryGrid";
import type { GalleryImage } from "../components/GalleryGrid";

const images: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80", alt: "Photo gift box", caption: "Gift Hamper" },
  { src: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=80", alt: "Personalized photo mug", caption: "Photo Mug" },
  { src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80", alt: "Custom photo items", caption: "Custom Gifts" },
  { src: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=800&q=80", alt: "Photo gift products", caption: "Memory Products" },
  { src: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800&q=80", alt: "Gift wrapping", caption: "Gift Wrapped" },
  { src: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=800&q=80", alt: "Custom photo album", caption: "Custom Album" },
  { src: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=800&q=80", alt: "Photo cushion", caption: "Photo Cushion" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80", alt: "Personalized keepsake", caption: "Keepsake" },
  { src: "https://images.unsplash.com/photo-1561715276-a2d087060f1d?auto=format&fit=crop&w=800&q=80", alt: "Photo keychain", caption: "Photo Keychain" },
];

export default function PhotoGiftsPage() {
  return (
    <ServicePage
      id="gifts"
      icon="🎁"
      title="Personalized Photo Gifts"
      subtitle="Memory Keepsakes"
      tagline="Transforming memories into gifts: Mugs, Keychains, Custom Albums."
      description="Turn your favourite photos into beautiful personalized gifts — coffee mugs, photo keychains, custom albums, cushions and much more. Perfect for anniversaries, birthdays, and special occasions. Every gift is crafted with care to make it truly one of a kind."
      color="#2e7d32"
      accentBg="rgba(46, 125, 50, 0.08)"
      accentBorder="rgba(46, 125, 50, 0.3)"
    >
      <GalleryGrid images={images} />
    </ServicePage>
  );
}
