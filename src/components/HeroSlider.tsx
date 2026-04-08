import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero8 from "@/assets/hero-8.jpg";

const slides = [
  {
    image: hero5,
    tag: "Since 2015",
    title: "TLEC (Re)Hab Foundation",
    subtitle: "World-class eye care with compassionate long-term support for the visually impaired.",
    cta: { label: "Our Services", to: "/eye-clinic" },
  },
  {
    image: hero2,
    tag: "Professional Training",
    title: "Training Eye Care Professionals",
    subtitle: "Equipping eye care workers across Nigeria with world-class low vision skills.",
    cta: { label: "Our Programs", to: "/eye-clinic" },
  },
  {
    image: hero8,
    tag: "Comprehensive Care",
    title: "Building Brighter Futures",
    subtitle: "From pediatric ophthalmology to rehabilitation — every patient deserves to see clearly.",
    cta: { label: "Visit The Clinic", to: "/eye-clinic" },
  },
  {
    image: hero1,
    tag: "Make a Difference",
    title: "Every Person Deserves to See",
    subtitle: "Your support funds rehabilitation, surgeries, and training that transforms lives.",
    cta: { label: "Donate Now", to: "/donate" },
  },
  {
    image: hero3,
    tag: "Rehabilitation",
    title: "Independence Through Rehab",
    subtitle: "Orientation, mobility training, and life skills empowering blind individuals.",
    cta: { label: "About Us", to: "/about" },
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[75vh] md:h-[85vh] min-h-[480px] max-h-[800px] overflow-hidden">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
            i === current ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
          }`}
        >
          <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(213,86%,6%,0.95)] via-[hsl(213,86%,10%,0.6)] to-[hsl(213,86%,10%,0.3)]" />
        </div>
      ))}

      {/* Content — bottom-aligned, minimal */}
      <div className="relative z-20 h-full flex items-end pb-20 md:pb-24">
        <div className="container">
          <div className="max-w-xl space-y-4">
            {/* Tag */}
            <span
              key={`tag-${current}`}
              className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-secondary animate-fade-in"
            >
              {slide.tag}
            </span>

            {/* Title */}
            <h1
              key={`title-${current}`}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] text-primary-foreground animate-slide-in"
            >
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p
              key={`sub-${current}`}
              className="text-sm md:text-base text-primary-foreground/70 leading-relaxed max-w-md animate-slide-in"
              style={{ animationDelay: "0.15s", opacity: 0 }}
            >
              {slide.subtitle}
            </p>

            {/* Single CTA */}
            <div
              key={`cta-${current}`}
              className="animate-slide-in pt-1"
              style={{ animationDelay: "0.3s", opacity: 0 }}
            >
              <Link
                to={slide.cta.to}
                className="group inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-3 transition-all"
              >
                {slide.cta.label}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Nav arrows — smaller, subtle */}
      <button
        onClick={prev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary-foreground/5 hover:bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary-foreground/5 hover:bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide indicators — bottom left, minimal */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 z-20 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-secondary"
                : "w-4 bg-primary-foreground/25 hover:bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSlider;
