"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/crop-logo.png";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function FullPageNav() {
  const [showFullPageNav, setShowFullPageNav] = useState<boolean>(false);
  return (
    <>
      {showFullPageNav && <div className="full-screen-nav"> 
        <div className="full-screen-bg"></div>
        <Link href={'/'} onClick={() => setShowFullPageNav(false)} className="full-page-link">Home</Link>
        <Link href={'/expertise'} onClick={() => setShowFullPageNav(false)}  className="full-page-link">Expertise</Link>
        <Link href={'/about'} onClick={() => setShowFullPageNav(false)}  className="full-page-link">About</Link>
        <Link href={'/contact'} onClick={() => setShowFullPageNav(false)}  className="full-page-link">Contact</Link>
      </div>}
      {!showFullPageNav && <div
        className="full-page-trigger"
        onClick={() => setShowFullPageNav(true)}
      >
        <Image src={logo} alt="crop-logo" quality={100} />
          <span className="trigger">
            <div className="bar"></div>
            <div className="bar"></div>
          </span>
        
      </div>}
      {showFullPageNav && <div
        className="full-page-trigger"
        onClick={() => setShowFullPageNav(false)}
      >
        <Image src={logo} alt="crop-logo" quality={100} />
        <XMarkIcon className="h-8 w-12 my-auto" />
      </div>}
    </>
  );
}
