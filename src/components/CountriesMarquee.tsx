"use client";
import React, { useState } from "react";
import keflag from "@/public/flags/kenya-flag.png";
import ugflag from "@/public/flags/uganda-flag.png";
import agflag from "@/public/flags/angola-flag.png";
import egflag from "@/public/flags/egypt-flag.png";
import ngflag from "@/public/flags/nigeria-flag.png";
import Image from "next/image";
// import { gsap } from "gsap";

type Countries = {
  name: string;
  flag: any;
};

export default function CountriesMarquee() {
  const [countries] = useState<Countries[]>([
    {
      name: "Kenya",
      flag: keflag,
    },
    {
      name: "Uganda",
      flag: ugflag,
    },
    {
      name: "Nigeria",
      flag: ngflag,
    },
    {
      name: "Egypt",
      flag: egflag,
    },
    {
      name: "Angola",
      flag: agflag,
    },
  ]);

//   useEffect(() => {
//     const marqueeInner = document.querySelector(".marquee__inner");
//     const marqueeParts = document.querySelectorAll(".mmarquee__part");
//     console.log(marqueeInner, marqueeParts)
//     if (marqueeParts && marqueeInner) {
//       // Calculate the width of the marquee content
//       let totalWidth = 0;
//       marqueeParts.forEach((part) => {
//         totalWidth += part.getBoundingClientRect().width;
//       });

//       // Clone the marquee content to create continuous scrolling
//       marqueeInner.innerHTML += marqueeInner.innerHTML;

//       // Set up GSAP timeline
//       const tl = gsap.timeline({ repeat: -1 });
//       tl.to(marqueeInner, {
//         x: -totalWidth,
//         duration: 20,
//         ease: "linear",
//       });

//       // Pause the animation on hover
//       marqueeInner.addEventListener("mouseenter", () => tl.pause());
//       marqueeInner.addEventListener("mouseleave", () => tl.play());
//     }
//   }, []);

  return (
    <div className="marquee__inner">
      {countries.map((country, index) => {
        return (
          <div key={index} className="marquee__part">
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
        );
      })}
    </div>
  );
}
