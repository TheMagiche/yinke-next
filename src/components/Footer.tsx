import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fancy-box"></div>
      <div className="bottom-bar">
      <Link className="footer-link" href={"/"}>
          <span>
            Home
            <div></div>
          </span>
        </Link>
        <Link className="footer-link" href={"/expertise"}>
          <span>
            Expertise
            <div></div>
          </span>
        </Link>
        <Link className="footer-link" href={"/about"}>
          <span>
            About
            <div></div>
          </span>
        </Link>
        <Link className="footer-link" href={"/contact"}>
          <span>
            Contact
            <div></div>
          </span>
        </Link>
        <Link className="footer-link" href={"/contact"}>
          <span>
            Legal notice
            <div></div>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
