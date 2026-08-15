"use client";

import { useTranslation } from "react-i18next";
import i18nConfig from "@/src/app/i18nConfig";

/**
 * Returns the URL prefix for the active locale.
 * The default locale is unprefixed (next-i18n-router prefixDefault: false).
 */
export const useLocalePrefix = () => {
  const { i18n } = useTranslation();
  return i18n.language === i18nConfig.defaultLocale
    ? ""
    : `/${i18n.language}`;
};
