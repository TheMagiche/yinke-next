import Link from "next/link";
import React from "react";

const TopRightNav = () => {
  return (
    <div className="top-right-nav">
      <Link className="link-top" href={"/expertise"}>
        <span>
          Expertise
          <div></div>
        </span>
      </Link>
      <Link className="link-top" href={"/about"}>
        <span>
          About
          <div></div>
        </span>
      </Link>
      <Link className="link-top" href={"/contact"}>
        <span>
          Contact
          <div></div>
        </span>
      </Link>
    </div>
  );
};

export default TopRightNav;
