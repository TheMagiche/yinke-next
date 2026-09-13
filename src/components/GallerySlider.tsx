"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { KeyboardEvent, useState } from "react";

const galleryImages = [
  "yinke-gallery-1.webp",
  "yinke-gallery-2.webp",
  "yinke-gallery-3.webp",
  "yinke-gallery-4.webp",
  "yinke-gallery-5.webp",
  "yinke-gallery-6.webp",
  "yinke-gallery-7.webp",
  "yinke-galllery-8.webp",
  "yinke-galley-9.webp",
];

type GallerySliderProps = {
  className?: string;
};

export default function GallerySlider({ className = "" }: GallerySliderProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleExpanded = (index: number) => {
    setExpandedIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  };

  const handleTileKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    index: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleExpanded(index);
    }
  };

  const showSlide = (index: number) => {
    setActiveIndex((index + galleryImages.length) % galleryImages.length);
  };

  return (
    <section
      className={`gallery-collage ${className}`.trim()}
      aria-label="Yinke gallery"
    >
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <figure
            className={`gallery-tile ${expandedIndex === index ? "is-expanded" : ""}`}
            key={image}
            tabIndex={0}
            role="button"
            aria-pressed={expandedIndex === index}
            onClick={() => toggleExpanded(index)}
            onKeyDown={(event) => handleTileKeyDown(event, index)}
          >
            <Image
              className="gallery-image"
              src={`/yinke-gallery/${image}`}
              alt={`Yinke gallery image ${index + 1}`}
              fill
              sizes="(max-width: 900px) 33vw, 28vw"
              priority={index === 0}
            />
          </figure>
        ))}
      </div>

      <div className="gallery-mobile-slider" aria-label="Yinke gallery slider">
        <div className="gallery-mobile-frame">
          <Image
            className="gallery-mobile-image"
            src={`/yinke-gallery/${galleryImages[activeIndex]}`}
            alt={`Yinke gallery image ${activeIndex + 1}`}
            fill
            sizes="100vw"
            priority
          />
          <button
            className="gallery-mobile-control gallery-mobile-control-prev"
            type="button"
            aria-label="Previous gallery image"
            onClick={() => showSlide(activeIndex - 1)}
          >
            <ChevronLeftIcon aria-hidden="true" />
          </button>
          <button
            className="gallery-mobile-control gallery-mobile-control-next"
            type="button"
            aria-label="Next gallery image"
            onClick={() => showSlide(activeIndex + 1)}
          >
            <ChevronRightIcon aria-hidden="true" />
          </button>
        </div>
        <p className="gallery-mobile-count" aria-live="polite">
          {activeIndex + 1} / {galleryImages.length}
        </p>
      </div>
    </section>
  );
}