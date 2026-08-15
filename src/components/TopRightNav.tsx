"use client";

import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocalePrefix } from "../utils/useLocalePrefix";

const TopRightNav = () => {
  const { t } = useTranslation();
  const prefix = useLocalePrefix();

  return (
    <div className="top-right-nav">
      <Link className="link-top" href={`${prefix}/expertise`}>
        <span>
          {t("nav.expertise")}
          <div></div>
        </span>
      </Link>
      <Link className="link-top" href={`${prefix}/about`}>
        <span>
          {t("nav.about")}
          <div></div>
        </span>
      </Link>
      <Link className="link-top" href={`${prefix}/contact`}>
        <span>
          {t("nav.contact")}
          <div></div>
        </span>
      </Link>
    </div>
  );
};

export default TopRightNav;
