"use client";

import CountriesMarquee from "@/src/components/CountriesMarquee";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
// import vid from '@/public/video.mp4';/

export default function Home() {
  const { t } = useTranslation();

  useLayoutEffect(() => {
    (async () => {
      // @ts-ignore
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="homepage">
      <div className="landing-strip">
        <h2 className="main-text">Yinke Africa</h2>
        <h2 className="alt-text">Unparalleled deliverance</h2>
      </div>
      <div className="video-wrapper">
        <video className="video-player" autoPlay loop muted playsInline>
          <source src={require("../../../public/bgvid.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="our-story">
        <div className="left">
          <h4>Our story</h4>
        </div>
        <div className="right">
          <p>
            As a global law firm from China, Yingke aims to serve the world with
            “one-stop” legal and commercial services. Yingke Law Firm, a leading
            law firm in China, was established in 2001 with our headquarters in
            Beijing. Today, we have 97 domestic branches and 83 member law firms
            of Yingke Global Legal Service Network – located in key financial,
            business and regulatory centers in Africa, Asia, Europe, South
            America and North America
          </p>
        </div>
      </div>
      <div className="vision-mission">
        <div className="fancy-box"></div>
        <div className="text-box">
          <p>
            At Yingke Africa Consultancy Limited, our vision is clear and
            unwavering: to be the premier provider of business consultancy
            services globally. We aspire to set new standards of excellence,
            fostering growth and prosperity for our clients by providing them
            with strategic insights needed to succeed in an ever-evolving
            business landscape.
          </p>
          <span>Vision</span>
        </div>
        <div className="text-box">
          <p>
            At Yingke Africa Consultancy Limited, our vision is clear and
            unwavering: to be the premier provider of business consultancy
            services globally. We aspire to set new standards of excellence,
            fostering growth and prosperity for our clients by providing them
            with strategic insights needed to succeed in an ever-evolving
            business landscape.
          </p>
          <span>Mission</span>
        </div>
      </div>
      <div className="our-story-button">
        <div className="fancy-box"></div>
        <div className="button-container">
          <div className="button-cls">
            <div className="background"></div>
            <div className="text">Who we are</div>
            <span className="icon">
              <ArrowRightIcon className="w-4 my-auto" />
            </span>
          </div>
        </div>
      </div>
      <div className="panel">
        <div className="video-wrapper section">
          <video className="video-player" autoPlay loop muted playsInline>
            <source
              src={require("../../../public/bgvid.mp4")}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="title-section section">
          <div className="title">
            <h4>Banking & Finance Law</h4>
            <span>What we do</span>
          </div>
          {/* <div className="paragraph-text">
            Changes within the financial services industry are a challenge to
            all law firms. Regulations are forever changing and just when you
            feel you are on top of it another comes along. Whilst there is a
            certain framework that the financial services industry operates
            within, it is our knowledge of regulatory, fiscal and economic
            systems that will assist our clients to successfully navigate the
            industry and avoid the pitfalls.
          </div> */}
        </div>
        <div className="actions-section section">
          <div className="button-cls">
            <span className="icon">
              <ArrowRightIcon className="w-4 my-auto" />
            </span>
          </div>
          <div className="paragraph-text">
            We understand the world of commercial banks, private equity, hedge
            funds and other asset managers, insurance companies and financial
            technology providers. Our specialist lawyers often come from a
            financial background or have been seconded to exactly these kinds of
            businesses. We have built our reputation by combining accurate
            professional reasoning with an entrepreneurial attitude. Our advice
            is always focused on results. We offer expert advice on investments,
            regulation, transactions, payments, disputes, technology and all
            issues that face the financial services world.
          </div>
        </div>
      </div>
      <div className="panel">
        <div className="video-wrapper section">
          <video className="video-player" autoPlay loop muted playsInline>
            <source
              src={require("../../../public/bgvid.mp4")}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="title-section section">
          <div className="title">
            <h4>LITIGATION & ARBITRATION</h4>
            <span>What we do</span>
          </div>
          {/* <div className="paragraph-text">
            Yingke takes pride in serving its clients in a way that builds
            relationships. We understand that One of the most stressful aspects
            for our business relationships is litigation. Our aim is to help our
            clients to avoid legal battles, avoid the cost and avoid the risk.
            However, when it is unavoidable, we are there for you with a full
            battery of experienced professionals who will use all legal means to
            help you win the argument.
          </div> */}
        </div>
        <div className="actions-section section">
          <div className="button-cls">
            <span className="icon">
              <ArrowRightIcon className="w-4 my-auto" />
            </span>
          </div>
          <div className="paragraph-text">
            Yingke litigators have tried cases throughout the world before
            national and international courts and arbitration panels. Our
            approach is straightforward: we make sure we understand your
            business model, your corporate goals and your budget. We conduct
            litigation in a methodical manner that maximizes the opportunity for
            a successful outcome and minimizes costs. We are experienced in
            negotiating cases to a favorable position to increase pressure on
            our adversary to settle the case without the expense and risk of a
            trial. Our experts are trained and experiences to represent clients
            in various jurisdictions. We have solid track record of arbitration
            mandates from numerous recognized arbitration centers all across
            Asia and Europe.
          </div>
        </div>
      </div>
      <div className="our-story-button">
        <div className="fancy-box"></div>
        <div className="button-container">
          <div className="button-cls">
            <div className="background"></div>
            <div className="text">What we do</div>
            <span className="icon">
              <ArrowRightIcon className="w-4 my-auto" />
            </span>
          </div>
        </div>
      </div>
      <div className="alt-section">
        <div className="video-wrapper">
          <video className="video-player" autoPlay loop muted playsInline>
            <source
              src={require("../../../public/bgvid.mp4")}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="initial-heading">
          <h2 className="upper-text">Global Mindset</h2>
          <h2 className="lower-text">Local Instinct</h2>
        </div>
        <div className="sub-text-heading">
          <div className="sub-text">
            At Yingke Africa Consultancy Limited, we are your
            strategic partners in navigating and conquering the dynamic business
            landscape of Africa.
          </div>
          <div className="button-container">
            <div className="button-cls">
              <div className="background"></div>
              <div className="text">Reach us</div>
              <span className="icon">
                <ArrowRightIcon className="w-4 my-auto" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="locations">
        <div className="left">
          <h4>Where we are</h4>
        </div>
        <div className="marquee">
          <CountriesMarquee />
        </div>
      </div>
    </main>
  );
}
