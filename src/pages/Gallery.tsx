import { useState } from "react";
import { Reveal } from "@/hooks/use-scroll-reveal";
import { X } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import hero7 from "@/assets/hero-7.jpg";
import hero8 from "@/assets/hero-8.jpg";
import hero9 from "@/assets/hero-9.jpg";

const categories = ["All", "Outreach", "Clinic", "Rehabilitation", "Facility", "Training"] as const;
type Category = (typeof categories)[number];


interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
  span?: string; // tailwind col/row span classes
}

const images: GalleryImage[] = [
  { src: gallery5, alt: "TLEC team with Free Eye Screening banner", category: "Outreach", span: "md:col-span-2 md:row-span-2" },
  { src: gallery2, alt: "Prof. Adio consulting with patients at TLEC clinic", category: "Clinic" },
  { src: gallery1, alt: "Scholarship recipients with certificates", category: "Rehabilitation" },
  { src: gallery4, alt: "Eye examination and patient consultation", category: "Clinic" },
  { src: gallery7, alt: "Free Eye Screening outreach team", category: "Outreach", span: "md:col-span-2" },
  { src: gallery3, alt: "TLEC staff at reception", category: "Facility" },
  { src: gallery6, alt: "Medical team conducting eye examinations", category: "Clinic" },
  { src: gallery8, alt: "Rehabilitation group session", category: "Rehabilitation", span: "md:col-span-2 md:row-span-2" },
  { src: hero1, alt: "Eye care and vision services", category: "Clinic" },
  { src: hero2, alt: "Community outreach program", category: "Outreach" },
  { src: gallery9, alt: "The Lens Eye Clinic building exterior", category: "Facility" },
  { src: gallery10, alt: "TLEC main facility building", category: "Facility", span: "md:col-span-2" },
  { src: hero3, alt: "Pediatric eye care services", category: "Clinic" },
  { src: hero4, alt: "Vision rehabilitation training", category: "Rehabilitation" },
  { src: hero5, alt: "Community eye health screening", category: "Outreach" },
  { src: hero6, alt: "Advanced eye diagnostics", category: "Clinic" },
  { src: hero7, alt: "Assistive technology training", category: "Rehabilitation" },
  { src: hero8, alt: "TLEC facility and equipment", category: "Facility" },
  { src: hero9, alt: "Team coordination meeting", category: "Outreach" },
  { src: gallery11, alt: "Pediatric eye examination — infant patient", category: "Clinic" },
  { src: gallery12, alt: "Workshop materials and training supplies", category: "Training" },
  { src: gallery13, alt: "Primary Eye Care workshop — Rivers State Health Board partnership", category: "Training", span: "md:col-span-2" },
  { src: gallery14, alt: "Training session — healthcare workers in classroom", category: "Training", span: "md:col-span-2" },
  { src: gallery15, alt: "Eye care training workshop participants", category: "Training" },
];

const Gallery = () => {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(213 86% 8%), hsl(213 60% 16%), hsl(213 86% 10%))" }}
      >
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--secondary)) , transparent 50%), radial-gradient(circle at 80% 50%, hsl(213 60% 30%), transparent 50%)" }} />
        <div className="container relative text-center">
          <Reveal direction="up">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6" style={{ background: "hsl(var(--secondary) / 0.15)", color: "hsl(var(--secondary))" }}>
              Our Gallery
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" style={{ color: "white" }}>
              Moments That <span style={{ color: "hsl(var(--secondary))" }}>Matter</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
              A visual journey through our work — from outreach screenings and clinic consultations to rehabilitation milestones and community impact.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-30 border-b border-border" style={{ background: "hsl(var(--background) / 0.95)", backdropFilter: "blur(12px)" }}>
        <div className="container flex gap-2 py-4 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                active === cat
                  ? "bg-secondary text-secondary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[240px] md:auto-rows-[280px]">
            {filtered.map((img, i) => (
              <Reveal key={img.src + active} delay={Math.min(i * 0.05, 0.3)} direction="scale" className={`${img.span || ""}`}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative w-full h-full rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-1.5" style={{ background: "hsl(var(--secondary) / 0.9)", color: "hsl(var(--secondary-foreground))" }}>
                      {img.category}
                    </span>
                    <p className="text-sm leading-snug" style={{ color: "white" }}>{img.alt}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "hsl(0 0% 0% / 0.9)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 p-2 rounded-full transition-colors"
            style={{ color: "white", background: "hsl(0 0% 100% / 0.1)" }}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={filtered[lightbox]?.src}
            alt={filtered[lightbox]?.alt}
            className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-center max-w-md" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
            {filtered[lightbox]?.alt}
          </p>
        </div>
      )}
    </>
  );
};

export default Gallery;
