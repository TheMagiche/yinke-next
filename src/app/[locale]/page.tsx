"use client";

import AfricaMap, {
  MAP_COUNTRIES,
  MAP_DEFAULT_COUNTRY,
  mapFlagUrl,
} from "@/src/components/AfricaMap";
import ContactInfo from "@/src/components/ContactInfo";
import OrigamiFolds from "@/src/components/OrigamiFolds";
import GallerySlider from "@/src/components/GallerySlider";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocalePrefix } from "@/src/utils/useLocalePrefix";

export default function Home() {
  const { t } = useTranslation();
  const prefix = useLocalePrefix();
  const [activeCountry, setActiveCountry] = useState(MAP_DEFAULT_COUNTRY);
  const flagUrl = mapFlagUrl(activeCountry);
  const [layerA, setLayerA] = useState(flagUrl);
  const [layerB, setLayerB] = useState(flagUrl);
  const [frontLayer, setFrontLayer] = useState<"a" | "b">("a");

  useLayoutEffect(() => {
    (async () => {
      // @ts-ignore
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    const current = frontLayer === "a" ? layerA : layerB;
    if (flagUrl === current) return;
    if (frontLayer === "a") {
      setLayerB(flagUrl);
      setFrontLayer("b");
    } else {
      setLayerA(flagUrl);
      setFrontLayer("a");
    }
  }, [flagUrl, frontLayer, layerA, layerB]);

  useEffect(() => {
    MAP_COUNTRIES.forEach((name) => {
      const img = new Image();
      img.src = mapFlagUrl(name);
    });
  }, []);

  return (
    <main className="homepage">
      {/* Hero — brand first, one composition */}
      <section className="hero">
        <OrigamiFolds variant="hero" />
        <div className="hero-flag" aria-hidden>
          <div
            className="hero-flag-layer"
            style={{
              backgroundImage: `url(${layerA})`,
              opacity: frontLayer === "a" ? 1 : 0,
            }}
          />
          <div
            className="hero-flag-layer"
            style={{
              backgroundImage: `url(${layerB})`,
              opacity: frontLayer === "b" ? 1 : 0,
            }}
          />
        </div>
        <div className="hero-content">
          <p className="hero-kicker">{t("home.mapTitle")}</p>
          <h1 className="hero-brand">{t("home.brand")}</h1>
          <p className="hero-tagline">{t("home.tagline")}</p>
          <Link href={`${prefix}/about`} className="origami-btn">
            <span>{t("home.whoWeAre")}</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
        <div className="hero-map">
          <AfricaMap active={activeCountry} onActiveChange={setActiveCountry} />
        </div>
      </section>

      {/* Our story */}
      <section className="fold-section story-section">
        <div className="fold-label">{t("home.ourStory")}</div>
        <p className="fold-copy">{t("home.storyText")}</p>
      </section>

      {/* Vision / Mission — origami facets */}
      <section className="facet-row">
        <article className="facet">
          <OrigamiFolds variant="panel" />
          <span className="facet-label">{t("home.vision")}</span>
          <p>{t("home.visionText")}</p>
        </article>
        <article className="facet facet-alt">
          <OrigamiFolds variant="panel" />
          <span className="facet-label">{t("home.mission")}</span>
          <p>{t("home.missionText")}</p>
        </article>
      </section>

      {/* Global / Local */}
      <section className="mindset-section">
        <OrigamiFolds variant="hero" />
        <div className="mindset-inner">
          <h2>
            <span>{t("home.globalMindset")}</span>
            <span className="mindset-amp">&</span>
            <span>{t("home.localInstinct")}</span>
          </h2>
          <p>{t("home.altSubText")}</p>
          <Link href={`${prefix}/expertise`} className="origami-btn">
            <span>{t("home.whatWeDo")}</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <GallerySlider />

      {/* Contact */}
      <section className="contact-section">
        <div className="contact-section-intro">
          <p className="practice-eyebrow">{t("nav.contact")}</p>
          <h2 className="fold-label">{t("home.reachUs")}</h2>
          <p>{t("home.altSubText")}</p>
        </div>
        <ContactInfo />
      </section>
    </main>
  );
}
