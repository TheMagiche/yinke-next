"use client";

import React from "react";
import { useTranslation } from "react-i18next";

type ExpertiseArea = {
  name: string;
  descriptionA: string;
  descriptionB: string;
};

export default function Expertise() {
  const { t } = useTranslation();
  const expertise = t("expertise.areas", {
    returnObjects: true,
  }) as ExpertiseArea[];
  const competenciesA = t("expertise.competenciesA", {
    returnObjects: true,
  }) as string[];
  const competenciesB = t("expertise.competenciesB", {
    returnObjects: true,
  }) as string[];

  return (
    <main className="expertise">
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
        <div className="expertise-copy">
          <h3>{t("expertise.overview")}</h3>
          <p>{t("expertise.overviewText")}</p>
          <div className="competence-title">{t("expertise.competenciesTitle")}</div>
          <div className="competencies">
            {competenciesA.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
        <div className="expertise-media">
          <video className="video-player" autoPlay loop muted playsInline>
            <source
              src={require("../../../../public/bgvid.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <section className="expertise-split reverse">
        <div className="expertise-media">
          <video className="video-player" autoPlay loop muted playsInline>
            <source
              src={require("../../../../public/bgvid.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="expertise-copy">
          <h3>{t("expertise.overview")}</h3>
          <p>{t("expertise.overviewText")}</p>
          <div className="competence-title">{t("expertise.competenciesTitle")}</div>
          <div className="competencies">
            {competenciesB.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {expertise.map((exp) => (
        <article key={exp.name} className="expertise-panel">
          <div className="expertise-panel-media">
            <video className="video-player" autoPlay loop muted playsInline>
              <source
                src={require("../../../../public/bgvid.mp4")}
                type="video/mp4"
              />
            </video>
          </div>
          <div className="expertise-panel-body">
            <h4>{exp.name}</h4>
            <div className="panel-cols">
              <p>{exp.descriptionA}</p>
              <p>{exp.descriptionB}</p>
            </div>
          </div>
        </article>
      ))}
    </main>
  );
}
