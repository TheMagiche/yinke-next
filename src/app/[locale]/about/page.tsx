"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import OrigamiFolds from "@/src/components/OrigamiFolds";
import GallerySlider from "@/src/components/GallerySlider";
import teamData from "../../../../public/team_data.json";

export default function About() {
  const { t } = useTranslation();

  return (
    <main className="about-us">
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
        {teamData.team.map((member) => (
          <article
            key={member.name}
            className="origami-tile team-tile"
            tabIndex={0}
          >
            <OrigamiFolds variant="panel" />
            <img className="team-image" src={member.image} alt={member.name} />
            <div className="team-details">
              <h2>{member.name}</h2>
              <span className="tile-label">{t(member.title)}</span>
              <p>{t(member.description)}</p>
            </div>
          </article>
        ))}
      </section>

      <GallerySlider />
    </main>
  );
}
