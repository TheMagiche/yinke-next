"use client";

import GallerySlider from "@/src/components/GallerySlider";
import React from "react";
import { useTranslation } from "react-i18next";

type ExpertiseArea = {
  name: string;
  description: string;
};

export default function Expertise() {
  const { t } = useTranslation();
  const expertise = t("expertise.services", {
    returnObjects: true,
  }) as ExpertiseArea[];

  const [sliderIndex, setSliderIndex] = React.useState(0);
  const total = expertise.length;

  const prev = () => setSliderIndex((i) => (i - 1 + total) % total);
  const next = () => setSliderIndex((i) => (i + 1) % total);

  return (
    <main className="expertise">
      <section className="page-hero">
        <div className="page-hero-media">
          <video className="video-player" autoPlay loop muted playsInline>
            <source
              src="/bgvid.mp4"
              type="video/mp4"
            />
          </video>
          <div className="page-hero-veil" aria-hidden />
        </div>
        <div className="page-hero-copy">
          <p className="eyebrow">{t("home.brand")}</p>
          <h1>
            {t("expertise.titleTop")}
            <span>{t("expertise.titleBottom")}</span>
          </h1>
        </div>
      </section>

      <section className="fold-intro">
        <h2>{t("expertise.ourExpertise")}</h2>
        <p>{t("expertise.intro")}</p>
      </section>

      <section className="expertise-split">
        <section
          className="expertise-slider"
          aria-label={t("expertise.servicesSlider")}
        >
          <div
            className="slider-track"
            style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
          >
            {expertise.map((service, index) => (
              <article
                key={service.name}
                className="slider-slide expertise-panel w-full"
                aria-hidden={index !== sliderIndex}
              >
                <div className="expertise-panel-body">
                  <h4>{service.name}</h4>
                  <div className="panel-cols">
                    <p>{service.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div
            className="slider-nav"
            role="group"
            aria-label={t("expertise.sliderNavigation")}
          >
            <button type="button" onClick={prev} aria-label={t("nav.previous")}>
              {t("nav.previous")}
            </button>
            <button type="button" onClick={next} aria-label={t("nav.next")}>
              {t("nav.next")}
            </button>
          </div>
          <div
            className="slider-dots"
            aria-label={t("expertise.slideIndicators")}
          >
            {expertise.map((service, index) => (
              <button
                key={service.name}
                type="button"
                onClick={() => setSliderIndex(index)}
                aria-label={t("expertise.goToSlide", { number: index + 1 })}
                aria-current={index === sliderIndex ? "true" : undefined}
                className={index === sliderIndex ? "dot active" : "dot"}
              />
            ))}
          </div>
        </section>
        <div className="expertise-media">
          <video className="video-player" autoPlay loop muted playsInline>
            <source
              src="/bgvid.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <GallerySlider />
    </main>
  );
}
