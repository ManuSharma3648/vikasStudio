export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type GalleryGridProps = {
  images?: GalleryImage[];
  emptyMessage?: string;
};

export default function GalleryGrid({ images = [], emptyMessage }: GalleryGridProps) {
  if (images.length === 0) {
    return (
      <div className="min-h-[320px] flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[rgba(201,162,39,0.35)] bg-[rgba(201,162,39,0.03)]">
        <div className="text-center px-8 py-12">
          <div className="mb-4 opacity-40">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mx-auto">
              <rect x="8" y="16" width="48" height="36" rx="4" stroke="#c9a227" strokeWidth="2" />
              <circle cx="32" cy="34" r="10" stroke="#c9a227" strokeWidth="2" />
              <circle cx="32" cy="34" r="4" fill="#c9a227" opacity="0.4" />
              <rect x="22" y="10" width="20" height="8" rx="2" stroke="#c9a227" strokeWidth="2" />
              <line x1="52" y1="22" x2="58" y2="22" stroke="#c9a227" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-[var(--studio-blue)] font-semibold text-lg mb-1 opacity-60">
            {emptyMessage || "Your portfolio photos will appear here"}
          </p>
          <p className="text-[var(--studio-blue-light)] text-sm opacity-50">
            Add your best work to showcase this service
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {images.map((img, i) => (
        <div
          key={i}
          className="break-inside-avoid rounded-2xl overflow-hidden gold-border-glow group cursor-pointer"
          style={{ border: '1.5px solid rgba(201,162,39,0.2)' }}
        >
          <div className="relative overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gold overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,45,94,0.6)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{img.caption}</p>
              </div>
            )}
            {/* Corner frame */}
            <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[rgba(201,162,39,0.6)] rounded-tl-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[rgba(201,162,39,0.6)] rounded-tr-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[rgba(201,162,39,0.6)] rounded-bl-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[rgba(201,162,39,0.6)] rounded-br-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      ))}
    </div>
  );
}
