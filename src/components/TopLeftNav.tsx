"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { useLocalePrefix } from "../utils/useLocalePrefix";

const TopLeftNav = () => {
  const prefix = useLocalePrefix();

  return (
    <div className="top-left-nav absolute top-0 left-0 z-50000">
      <Link className="link-top" href={`${prefix}/`}>
        <Image src={logo} alt="main-logo" className="w-1/5" priority quality={100}/>
      </Link>
    </div>
  );
};

export default TopLeftNav;
