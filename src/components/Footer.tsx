"use client";

import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocalePrefix } from "../utils/useLocalePrefix";
import OrigamiFolds from "./OrigamiFolds";

const Footer = () => {
  const { t } = useTranslation();
  const prefix = useLocalePrefix();

  return (
    <div className="footer">
      <OrigamiFolds variant="footer" />
      <div className="bottom-bar">
        <Link className="footer-link" href={`${prefix}/`}>
          <span>
            {t("nav.home")}
            <div></div>
          </span>
        </Link>
        <Link className="footer-link" href={`${prefix}/expertise`}>
          <span>
            {t("nav.expertise")}
            <div></div>
          </span>
        </Link>
        <Link className="footer-link" href={`${prefix}/about`}>
          <span>
            {t("nav.about")}
            <div></div>
          </span>
        </Link>
        <Link className="footer-link" href={`${prefix}/contact`}>
          <span>
            {t("nav.contact")}
            <div></div>
          </span>
        </Link>
        <Link className="footer-link" href={`${prefix}/contact`}>
          <span>
            {t("nav.legalNotice")}
            <div></div>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
