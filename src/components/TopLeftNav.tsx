import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

const TopLeftNav = () => {
  return (
    <div className="top-left-nav">
      <Link className="link-top" href={"/"}>
        <Image src={logo} alt="main-logo" className="w-1/5" priority quality={100}/>
      </Link>
    </div>
  );
};

export default TopLeftNav;
