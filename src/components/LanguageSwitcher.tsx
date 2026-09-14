"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";
import i18nConfig from "@/src/app/i18nConfig";
import Image, { StaticImageData } from "next/image";
import enflag from "@/public/en.png";
import zhCNflag from "@/public/zh-CN.png";

type Language = {
  code: string;
  flag: StaticImageData;
};

const languages: Language[] = [
  { code: "en", flag: enflag },
  { code: "zh-CN", flag: zhCNflag },
];

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const router = useRouter();
  const currentPathname = usePathname();

  const currentLocale = languages.some((l) => l.code === i18n.language)
    ? i18n.language
    : i18nConfig.defaultLocale;

  if (currentPathname.includes("/blog/")) return null;

  const handleChange = (newLocale: string) => () => {
    if (newLocale === currentLocale) return;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // Strip the current locale prefix, then add the new one.
    // The default locale stays unprefixed (prefixDefault: false).
    let basePath = currentPathname;
    if (currentLocale !== i18nConfig.defaultLocale) {
      basePath = basePath.replace(`/${currentLocale}`, "") || "/";
    }
    const newPath =
      newLocale === i18nConfig.defaultLocale
        ? basePath
        : `/${newLocale}${basePath === "/" ? "" : basePath}`;

    router.push(newPath);
    router.refresh();
  };

  const current = languages.find((l) => l.code === currentLocale)!;

  return (
    <div className="language-switcher">
      <span className="current-language flex">
        <Image
          src={current.flag}
          className="image"
          alt={t(`languages.${current.code}`)}
        />
        <h6>{t(`languages.${current.code}`)}</h6>
      </span>
      {languages
        .filter((l) => l.code !== currentLocale)
        .map((l) => (
          <span key={l.code} className="selections" onClick={handleChange(l.code)}>
            <Image src={l.flag} className="image" alt={t(`languages.${l.code}`)} />
            <h6>{t(`languages.${l.code}`)}</h6>
          </span>
        ))}
    </div>
  );
};

export default LanguageSwitcher;
