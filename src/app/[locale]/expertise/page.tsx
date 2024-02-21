"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

type Expertise = {
  name: string;
  descriptionA: string;
  descriptionB: string;
};

export default function Expertise() {
  const [expertise] = useState<Expertise[]>([
    {
      name: "BANKING AND FINANCE LAW",
      descriptionA: `Changes within the financial services industry are a challenge to
      all law firms. Regulations are forever changing and just when you
      feel you are on top of it another comes along. Whilst there is a
      certain framework that the financial services industry operates
      within, it is our knowledge of regulatory, fiscal and economic
      systems that will assist our clients to successfully navigate the
      industry and avoid the pitfalls.`,
      descriptionB: `We understand the world of commercial banks, private equity, hedge
      funds and other asset managers, insurance companies and financial
      technology providers. Our specialist lawyers often come from a
      financial background or have been seconded to exactly these kinds of
      businesses. We have built our reputation by combining accurate
      professional reasoning with an entrepreneurial attitude. Our advice
      is always focused on results. We offer expert advice on investments,
      regulation, transactions, payments, disputes, technology and all
      issues that face the financial services world.`,
    },
    {
      name: "CAPITAL MARKETS & SECURITIES",
      descriptionA: `Raising funds for growth and expansion is crucial for the development of every company. Yingke represents issuers, investors and investment banks in the full range of public and private capital raising and recapitalization transactions.`,
      descriptionB: `Our global office network allows us to combine our global insight with knowledge of local markets and regulatory environments, ensuring that the best solutions to even the most intricate and specific legal issues are provided to our clients. Our capital market team is highly experienced in equity offerings, debt offerings, sovereign issues, high yield, securitization, derivatives, investment funds, corporate trusts and regulatory matters. We offer a full range of services and guide our clients through various issues and regulations in the most important financial hubs in Asia, America and Europe.`,
    },
    {
      name: "CORPORATE LAW, MERGERS & ACQUISITIONS",
      descriptionA: `Yingke’s associated network of offices around the world are advisors to public and private companies in all nature of mergers and acquisitions. These include dispositions of subsidiaries, establishment of new investment vehicles, acquisitions and joint ventures. Our clients vary from small and mid-sized private companies to large capitalization public corporations covering all nature of commercial sectors.`,
      descriptionB: `Our aim is always to assist our clients to determine the most beneficial and correct structure for the transaction. We consider all areas of the transaction from operational, management and compliance perspectives. Our thorough knowledge of all regulatory and business aspects applying to these transactions means we can not only assist in strategic planning but also work closely with various specialists in our firm throughout the implementation and post-transaction phases. Areas such as intellectual property, tax, antitrust, labour and employment, real estate and environmental can be handled by specialists within the firm.Our advice is often sought by interested parties reading corporate governance matters and we often assist public boards regarding significant transactions, takeover status and disclosure Labour Law issues.`,
    },
    {
      name: "INTELLECTUAL PROPERTY LAW",
      descriptionA: `New intellectual property is created on a continuing basis. Legal protection of IP is the crucial element in securing our business values. We understand and appreciate that creative people have a right to protect their asset and this is why we have specialists in this area. Through intellectual property law clients can establish, protect and enhance the value of their IP assets. Our services relate to patent, trademark, copyright and trade secret protection, online content production, e-commerce to name a few. We will support your process from planning to design and development. If necessary, we will support you in litigation of any transgression through the courts or relevant bodies.`,
      descriptionB: `We believe in providing to our intellectual property clients the highest quality and most cost-effective legal support possible. We can assist with the domestic and foreign registration or transfer of intellectual property and can provide our clients with advice on all aspects of overall brand protection. Many of our IP attorneys have additional degrees and practical business experience in advanced technology industries. This experience ensures that we will understand your IP needs and can assist you in all related matters.`,
    },
    {
      name: "INTERNATIONAL TRADE LAW, ANTI-DUMPING",
      descriptionA: `Companies around the world have better and better possibilities to enter the global market thanks to the continuously increasing number of nations involved in international trade. However, the challenges of this rapidly developing regulatory environment are also growing. Yingke Law Firm is present in many of the world’s most important markets. The network of our Asian, European and American offices allowed us to build an international team of trade law experts to advise clients (businesses, government agencies, chambers, associations) on the dos and dont’s of international trade of goods and services. In line with our goal to facilitate trade and business between China and other countries of the world, we put great emphasis on Chinese-International commercial deals. We serve businesses from industry giants to SMEs and boutiques.`,
      descriptionB: `In our practice of international trade law we deal in many jurisdictions with contracts, negotiations, policy issues, export controls, customs classification, rules of trade regimes, antidumping, logistics, insurance, licensing and more. We approach this field in a multidisciplinary manner, our commercial law experts have sound knowledge on various practices key to trading, such as litigation and arbitration, intellectual property, international public law, maritime law to name a few. Our experts work closely together with consultants from the field of customs, technology, shipping, logistics and export-import insurance and banking.`,
    },
    {
      name: "IT AND COMMUNICATIONS LAW",
      descriptionA: `IT and communication is a constantly changing industry, due I to the improvements in technologies and changes of regulations, involving tremendous amount of technical knowledge and skills. This implies lawyers without extensive experience in this challenging industry may not have enough business expertise and industry knowledge to assist their clients with highly specific needs.`,
      descriptionB: `Our team of IT and communication experts has vast industry and government experience. Their intimate understanding of the industry allows us to provide clients with insider insights and the most creative but at the same time pragmatic solutions. Serving a broad range of clients, our experts have significant experience in all aspects of the industry. Our services include regulatory and strategic advisory services, legal analysis, patent registration and litigation, project development and finance, and more.`,
    },
    {
      name: "LABOUR LAW",
      descriptionA: `The primary asset of any company is its people and the terms of their employment is critical to their happiness and thus the commercial health of the company. Our labour law practice recognizes the issues surrounding this concept and we will assist you with combining your organizational objectives with the regulatory rights and needs of the individual employees`,
      descriptionB: `We are experienced in defending employers against wrongful dismissal suits, effectively prosecuting and defending cases for breach of non-competition agreements and misappropriation of confidential information. Yingke has significant experience in accepted labour matters, such as contract negotiations, labour grievances and arbitrations. Our specialist lawyers can assists with taxation and social security matters, work permits for foreign workers, redundancies, reorganizations and much more. We can help with both the initiation and termination of employment and all associated matters.`,
    },
    {
      name: "LITIGATION & ARBITRATION",
      descriptionA: `Yingke takes pride in serving its clients in a way that builds relationships. We understand that One of the most stressful aspects for our business relationships is litigation. Our aim is to help our clients to avoid legal battles, avoid the cost and avoid the risk. However, when it is unavoidable, we are there for you with a full battery of experienced professionals who will use all legal means to help you win the argument.`,
      descriptionB: `Yingke litigators have tried cases throughout the world before national and international courts and arbitration panels. Our approach is straightforward: we make sure we understand your business model, your corporate goals and your budget. We conduct litigation in a methodical manner that maximizes the opportunity for a successful outcome and minimizes costs. We are experienced in negotiating cases to a favorable position to increase pressure on our adversary to settle the case without the expense and risk of a trial. Our experts are trained and experiences to represent clients in various jurisdictions. We have solid track record of arbitration mandates from numerous recognized arbitration centers all across Asia and Europe.`,
    },
    {
      name: "MARITIME LAW",
      descriptionA: `Maritime law is a heterogeneous practice area that includes public law, private law and international law. Therefore issues where different laws conflict with each other are frequent and there is great demand of comprehensive, multijurisdictional legal advice. Maritime law cases usually cover laws or rules that govern commerce, shipping, liability claims that arise on the world’s navigable waters.`,
      descriptionB: `Yingke maritime law specialist represents clients in a wide variety of maritime cases, including contracts, seafarers’ rights, environmental matters, insurance disputes, liability issues and arbitration. Through our experienced maritime practice groups operating in numerous offices of the Yingke network in China and internationally we provide legal support concerning towage, liens, maritime injuries, enforced sale of vessels, registration of vessels, and mortgage on vessels as well. We provide complex legal representation to ports covering all legal matters that arise in the course of their professional routine. Yingke maintains a worldwide monitoring practice and ensures access to the latest legislation and regulatory matters to its clients.`,
    },
    {
      name: "MEDIA AND ENTERTAINMENT LAW",
      descriptionA: `Artist make a living by their artistic products and their image. To protect these assets against infringers is one of the most challenging work of our law firm. We provide solid legal assistance to our client which allows them to prevent their work legally and reach the best economic use of their efforts. Yingke’s clients include the top movie, television, music production and theatre companies in various countries. We are legal consultants to well-known artists, production firms, television channels and theatres.`,
      descriptionB: `Our range of services covers option agreements, title and talent agreements, international co-production issues, post production issues, distribution and broadcasting licensing issues, agency issues. We deal with various publishing matters such as advertising, contracts with models, author agreements and copyright claims. Our media and entertainment law teams draw on a wealth of legal and industry experience to provide top quality service no matter if the issue concerns license and merchandising agreements, dubbing agreements or reputation management, legal PR, legal consulting on event management social media and privacy issues.`,
    },
    {
      name: "REAL ESTATE LAW",
      descriptionA: `The real estate market is still one of the most important growth factors of the economy, but we have had to wit¬ness great falls due to the recession recently. For classical legal assistance is not enough any longer, we have added special features to the usual real property practices, and we have involved real property experts and agents in our teamwork. If necessary, we check the properties or leased properties. We provide assistance in financing, tax optimization, creating and handling project groups. Our clients are comprised of all the participants in the real estate market: industrial and retail developers, agents, real estate park and apartment investors, as well as property managers. `,
      descriptionB: `We understand the specialists that real estate work requires are different from other industries. Our experts work on a daily basis for real estate clients and understand that real estate transactions cross many borders and disciplines. From litigation to funding, from contract negotiation to joint ventures; our lawyers can assist on many levels.`,
    },
    {
      name: "TAX LAW",
      descriptionA: `Tax law is not only very complex in structure, it also changes rapidly. Our tax lawyers keep up with the these updates and grant access to the latest information to our clients accordingly. We provide assistance in tax planning when setting up investment vehicles, trust funds or stock portfolios. We recognize tax legislation and practice is a complex area to navigate. However, our multidisciplinary law firm services are designed to reflect this reality, and in cooperation with our strategic partners within this field we believe that we have the professional staff and resources to address a broad range of questions.`,
      descriptionB: `These issues include income tax issues, state and local tax, employment benefits, and general tax advice. Tax fines could easily snowball, therefore it is the client’s best choice to solve issues until they do not jeopardize the normal course of business. Our tax experts are trained to ease the burdens of tax audits, have fines reduced, liens removed, and navigate clients through complicated tax matters.`,
    },
  ]);
  return (
    <main className="expertise">
      <div className="alt-section">
        <div className="landing-strip">
          <div className="left">
            <h2 className="main-text">Expertise</h2>
            <h2 className="alt-text">& Mandates</h2>
          </div>
          <div className="right">
            <div className="video-wrapper section">
              <video className="video-player" autoPlay loop muted playsInline>
                <source
                  src={require("../../../../public/bgvid.mp4")}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="our-expertise">
          <div className="left">
            <h4>Our Expertise</h4>
          </div>
          <div className="right">
            <p>
              As a trusted partner, we advise business leaders on their most
              important financial and strategic challenges. Our ambition is to
              provide our clients with the highest-quality bespoke services.
            </p>
          </div>
        </div>
        <div className="expertise-overview">
          <div className="section-text">
            <div className="title-text">
              <h3>Overview</h3>
            </div>
            <div className="sub-title">
              <div className="fancy-box"></div>
              <div className="sub-title-text">
                <p>
                  Recognised expertise in the most complex M&A operations (sale
                  processes, acquisitions, fundraising, carve-outs/spin-offs).
                  Our hallmarks are confidentiality, independence and excellence
                  in execution.
                </p>
              </div>
            </div>
            <div className="competence-section">
              <div className="competence-title">Our Competencies</div>
              <div className="competencies">
                <span>Agribusiness & food</span>
                <span>Automotive</span>
                <span>Capital markets & securities</span>
                <span>Chemicals</span>
                <span>Energy & mining</span>
                <span>Health, sciences & pharmaceuticals</span>
                <span>High-tech & start-ups</span>
              </div>
            </div>
          </div>
          <div className="video-wrapper section">
            <video className="video-player" autoPlay loop muted playsInline>
              <source
                src={require("../../../../public/bgvid.mp4")}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="expertise-overview">
          <div className="video-wrapper section">
            <video className="video-player" autoPlay loop muted playsInline>
              <source
                src={require("../../../../public/bgvid.mp4")}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="section-text">
            <div className="title-text">
              <h3>Overview</h3>
            </div>
            <div className="sub-title">
              <div className="fancy-box"></div>
              <div className="sub-title-text">
                <p>
                  Recognised expertise in the most complex M&A operations (sale
                  processes, acquisitions, fundraising, carve-outs/spin-offs).
                  Our hallmarks are confidentiality, independence and excellence
                  in execution.
                </p>
              </div>
            </div>
            <div className="competence-section">
              <div className="competence-title">Our Competencies</div>
              <div className="competencies">
                <span>Insuarance</span>
                <span>Investment banking & consultancy</span>
                <span>Luxury goods</span>
                <span>Manufacturing</span>
                <span>Media & entertainment</span>
                <span>Private equity</span>
                <span>Real estate & construction</span>
                <span>Transportation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {expertise.map((exp, index) => {
        return (
          <div key={index} className="panel">
            <div className="video-wrapper section">
              <video className="video-player" autoPlay loop muted playsInline>
                <source
                  src={require("../../../../public/bgvid.mp4")}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="title-section section">
              <div className="title">
                <h4>{exp.name}</h4>
              </div>
              <div className="paragraph-text">{exp.descriptionA}</div>
            </div>
            <div className="actions-section section">
              <div className="button-cls"></div>
              <div className="paragraph-text">{exp.descriptionB}</div>
            </div>
          </div>
        );
      })}
    </main>
  );
}
