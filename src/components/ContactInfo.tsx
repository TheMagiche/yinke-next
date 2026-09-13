"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import contactData from "../../public/contact_data.json";

export default function ContactInfo() {
  const { t } = useTranslation();

  return (
    <div className="contact-form contact-info">
      <div className="contact-form-grid">
        <a
          href={`https://${contactData.website}`}
          className="field"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{t("contact.website")}</span>
          <div className="contact-value">{contactData.website}</div>
        </a>
        <a
          href={`mailto:${contactData.email}`}
          className="field"
        >
          <span>{t("contact.email")}</span>
          <div className="contact-value">{contactData.email}</div>
        </a>
        <div className="field">
          <span>{t("contact.mobile")}</span>
          <div className="contact-value">{contactData.phone.mobile}</div>
        </div>
        <div className="field">
          <span>{t("contact.landline")}</span>
          <div className="contact-value">{contactData.phone.landline}</div>
        </div>
        <a
          href={contactData.address.mapUrl}
          className="field field-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{t("contact.address")}</span>
          <div className="contact-value">
            {contactData.address.officeBuilding}, {contactData.address.city}
            <br />
            {t("contact.postal")}: {contactData.address.postal}
          </div>
        </a>
        <a
          href={contactData.linkedin}
          className="field"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{t("contact.linkedin")}</span>
          <div className="contact-value">{contactData.linkedin}</div>
        </a>
      </div>
    </div>
  );
}
