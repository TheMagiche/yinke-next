"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import OrigamiFolds from "@/src/components/OrigamiFolds";
import ContactInfo from "@/src/components/ContactInfo";
// import GallerySlider from "@/src/components/GallerySlider";
import BlogList from "@/src/components/BlogList";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <main className="contact-page">
      <section className="page-hero contact-hero">
        <OrigamiFolds variant="hero" />
        <div className="page-hero-copy">
          <p className="eyebrow">{t("home.brand")}</p>
          <h1>{t("contact.title")}</h1>
          <p className="contact-lead">{t("home.altSubText")}</p>
        </div>
      </section>

            <BlogList />

      <section className="fold-intro contact-form-section">
        <h2>{t("home.reachUs")}</h2>
        <ContactInfo />
      </section>
    </main>
  );
}
