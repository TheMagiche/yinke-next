"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import OrigamiFolds from "@/src/components/OrigamiFolds";

export default function About() {
  const { t } = useTranslation();

  const tiles = [
    { label: "about.block1Label", text: "about.block1Text" },
    { label: "about.block2Label", text: "about.block2Text" },
    { label: "about.block3Label", text: "about.block3Text" },
    { label: "about.block4Label", text: "about.block4Text" },
    { label: "about.block5Label", text: "about.block5Text" },
  ];

  return (
    <main className="about-us">
      <section className="page-hero">
        <div className="page-hero-media">
          <video className="video-player" autoPlay loop muted playsInline>
            <source
              src={require("../../../../public/bgvid.mp4")}
              type="video/mp4"
            />
          </video>
          <div className="page-hero-veil" aria-hidden />
        </div>
        <div className="page-hero-copy">
          <p className="eyebrow">{t("home.brand")}</p>
          <h1>
            {t("about.titleTop")}
            <span>{t("about.titleBottom")}</span>
          </h1>
        </div>
      </section>

      <section className="fold-intro">
        <h2>{t("about.cultureTitle")}</h2>
        <p>{t("about.cultureText")}</p>
      </section>

      <section className="origami-grid">
        {tiles.map((tile) => (
          <article key={tile.label} className="origami-tile">
            <OrigamiFolds variant="panel" />
            <span className="tile-label">{t(tile.label)}</span>
            <p>{t(tile.text)}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
