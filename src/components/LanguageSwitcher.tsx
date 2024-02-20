"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";
import i18nConfig from "@/src/app/i18nConfig";
import Image from "next/image";
import enflag from "@/public/en.png";
import zhCNflag from "@/public/zh-CN.png";
import { classNames } from "../utils/helpers";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = React.useCallback(
    (newLocale: string) => () => {
      const days = 30;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = "; expires=" + date.toUTCString();
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

      if (currentLocale === i18nConfig.defaultLocale) {
        router.push("/" + newLocale + currentPathname);
      } else {
        router.push(
          currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        );
      }

      router.refresh();
    },
    [currentLocale, currentPathname, router]
  );

  const checkFlag = (icon: string) => {
    switch (icon) {
    case 'en':
      return enflag;
      break;
    case 'zh-CN':
      return zhCNflag;
      break;
    default:
      return enflag;
      break;
    }
  };

  const checkLanguage = (label: string) => {
    switch (label) {
    case 'en':
      return 'English';
      break;
    case 'zh-CN':
      return 'Mandarin';
      break;
    default:
      return 'English';
      break;
    }
  };

  return (
    <div className="language-switcher">
      <span className="current-language flex">
        <Image src={checkFlag(currentLocale)} className="image" alt={`${checkLanguage(currentLocale)} flag`} />
        <h6>{checkLanguage(currentLocale)}</h6>
      </span>
      <span className={classNames(currentLocale === 'en' ? 'hidden' : 'selections')} onClick={handleChange("en")}>
        <Image src={enflag} className="image" alt={"English flag"} />
        <h6>English</h6>
      </span>
      <span className={classNames(currentLocale === 'zh-CN' ? 'hidden' : 'selections')} onClick={handleChange("zh-CN")}>
        <Image src={zhCNflag} className="image" alt={"Mandarin flag"}/>
        <h6>Mandarin</h6>
      </span>
    </div>
  );
};

export default LanguageSwitcher;
