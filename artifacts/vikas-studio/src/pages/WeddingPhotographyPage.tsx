import ServicePage from "./ServicePage";
import GalleryGrid from "../components/GalleryGrid";
import type { GalleryImage } from "../components/GalleryGrid";

const images: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", alt: "Wedding couple portrait", caption: "Wedding Portrait" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80", alt: "Bridal portrait", caption: "Bridal Portrait" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80", alt: "Wedding ceremony", caption: "Sacred Ceremony" },
  { src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=800&q=80", alt: "Wedding reception decor", caption: "Reception Decor" },
  { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80", alt: "Wedding rings", caption: "Wedding Rings" },
  { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&q=80", alt: "Wedding vows moment", caption: "Vows Moment" },
  { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80", alt: "Bride and groom", caption: "Together Forever" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80", alt: "Wedding details", caption: "Cherished Details" },
  { src: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&w=800&q=80", alt: "Wedding celebration", caption: "Joyful Celebration" },
];

export default function WeddingPhotographyPage() {
  return (
    <ServicePage
      id="wedding"
      icon="💍"
      title="Wedding Photography"
      subtitle="Timeless Elegance"
      tagline="Capturing your timeless traditional elegance."
      description="We document every sacred moment of your wedding day with sensitivity and artistry — from the first look to the last dance. Our photographers blend into your celebration, capturing genuine emotions and the rich traditions that make your wedding uniquely yours."
      color="#c9a227"
      accentBg="rgba(201, 162, 39, 0.08)"
      accentBorder="rgba(201, 162, 39, 0.3)"
    >
      <GalleryGrid images={images} />
    </ServicePage>
  );
}
