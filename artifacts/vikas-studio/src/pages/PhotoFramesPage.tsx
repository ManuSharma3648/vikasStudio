import ServicePage from "./ServicePage";
import GalleryGrid from "../components/GalleryGrid";
import type { GalleryImage } from "../components/GalleryGrid";

const images: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80", alt: "Frames on wall", caption: "Gallery Wall" },
  { src: "https://images.unsplash.com/photo-1452802447250-470a88ac82bc?auto=format&fit=crop&w=800&q=80", alt: "Wall art display", caption: "Wall Art" },
  { src: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80", alt: "Gallery wall arrangement", caption: "Frame Arrangement" },
  { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80", alt: "Photo album", caption: "Bound Album" },
  { src: "https://images.unsplash.com/photo-1616627561839-074385245ff6?auto=format&fit=crop&w=800&q=80", alt: "Canvas print", caption: "Canvas Print" },
  { src: "https://images.unsplash.com/photo-1526040652367-ac003a0475fe?auto=format&fit=crop&w=800&q=80", alt: "Elegant photo frame", caption: "Elegant Frame" },
  { src: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=800&q=80", alt: "Premium wall art", caption: "Premium Art Piece" },
  { src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80", alt: "Photo display", caption: "Display Collection" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", alt: "Home decor frames", caption: "Home Décor" },
];

export default function PhotoFramesPage() {
  return (
    <ServicePage
      id="frames"
      icon="🖼️"
      title="Photo Frames & Wall Art"
      subtitle="Exquisite Art Pieces"
      tagline="Exquisite framed art and albums."
      description="Transform your favourite images into stunning wall art, premium frames, and beautifully bound photo albums for your home. From elegant tabletop frames to large canvas wall prints, we create display pieces that become the centerpiece of any room."
      color="#1a2d5e"
      accentBg="rgba(201, 162, 39, 0.08)"
      accentBorder="rgba(201, 162, 39, 0.3)"
    >
      <GalleryGrid images={images} />
    </ServicePage>
  );
}
