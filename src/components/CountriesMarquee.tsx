"use client";
import React from "react";
import keflag from "@/public/flags/kenya-flag.png";
import ugflag from "@/public/flags/uganda-flag.png";
import agflag from "@/public/flags/angola-flag.png";
import egflag from "@/public/flags/egypt-flag.png";
import ngflag from "@/public/flags/nigeria-flag.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";

type Countries = {
  name: string;
  flag: any;
};

export default function CountriesMarquee() {
  const { t } = useTranslation();
  const countries: Countries[] = [
    { name: t("countries.kenya"), flag: keflag },
    { name: t("countries.uganda"), flag: ugflag },
    { name: t("countries.nigeria"), flag: ngflag },
    { name: t("countries.egypt"), flag: egflag },
    { name: t("countries.angola"), flag: agflag },
  ];

  const loop = [...countries, ...countries];

  return (
    <div className="marquee__inner">
      {loop.map((country, index) => (
        <div key={`${country.name}-${index}`} className="marquee__part">
          <div className="flag-bg"></div>
          <Image
            src={country.flag}
            priority
            quality={100}
            className="flag"
            alt={country.name}
          />
          <span className="name">{country.name}</span>
        </div>
      ))}
    </div>
  );
}
