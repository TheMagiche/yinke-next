"use client";

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
    </section>
  );
}