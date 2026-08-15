"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

type Status = "idle" | "sent";

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="contact-form-grid">
        <label className="field">
          <span>{t("contact.name")}</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder={t("contact.namePlaceholder")}
          />
        </label>
        <label className="field">
          <span>{t("contact.email")}</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder={t("contact.emailPlaceholder")}
          />
        </label>
        <label className="field">
          <span>{t("contact.company")}</span>
          <input
            type="text"
            name="company"
            autoComplete="organization"
            placeholder={t("contact.companyPlaceholder")}
          />
        </label>
        <label className="field">
          <span>{t("contact.phone")}</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder={t("contact.phonePlaceholder")}
          />
        </label>
        <label className="field field-full">
          <span>{t("contact.message")}</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder={t("contact.messagePlaceholder")}
          />
        </label>
      </div>

      <div className="contact-form-actions">
        <button type="submit" className="origami-btn" disabled={status === "sent"}>
          <span>
            {status === "sent" ? t("contact.sent") : t("contact.submit")}
          </span>
          {status !== "sent" && <ArrowRightIcon className="w-4 h-4" />}
        </button>
        {status === "sent" && (
          <p className="contact-form-note">{t("contact.thanks")}</p>
        )}
      </div>
    </form>
  );
}
