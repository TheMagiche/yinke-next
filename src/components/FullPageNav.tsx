"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/crop-logo.png";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLocalePrefix } from "../utils/useLocalePrefix";
import TopLeftNav from "./TopLeftNav";

export default function FullPageNav() {
  const [showFullPageNav, setShowFullPageNav] = useState<boolean>(false);
  const { t } = useTranslation();
  const prefix = useLocalePrefix();

  return (
    <>
      {showFullPageNav && <TopLeftNav />}
      {showFullPageNav && (
        <div className="full-screen-nav">
          <div className="full-screen-bg"></div>
          <Link
            href={`${prefix}/`}
            onClick={() => setShowFullPageNav(false)}
            className="full-page-link"
          >
            {t("nav.home")}
          </Link>
          <Link
            href={`${prefix}/expertise`}
            onClick={() => setShowFullPageNav(false)}
            className="full-page-link"
          >
            {t("nav.expertise")}
          </Link>
          <Link
            href={`${prefix}/about`}
            onClick={() => setShowFullPageNav(false)}
            className="full-page-link"
          >
            {t("nav.about")}
          </Link>
          <Link
            href={`${prefix}/contact`}
            onClick={() => setShowFullPageNav(false)}
            className="full-page-link"
          >
            {t("nav.contact")}
          </Link>
        </div>
      )}
      {!showFullPageNav && (
        <div
          className="full-page-trigger"
          onClick={() => setShowFullPageNav(true)}
        >
          <Image src={logo} alt="crop-logo" quality={100} />
          <span className="trigger">
            <div className="bar"></div>
            <div className="bar"></div>
          </span>
        </div>
      )}
      {showFullPageNav && (
        <div
          className="full-page-trigger"
          onClick={() => setShowFullPageNav(false)}
        >
          <Image src={logo} alt="crop-logo" quality={100} />
          <XMarkIcon className="h-8 w-12 my-auto text-[var(--noir-paper)]" />
        </div>
      )}
    </>
  );
}
