"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PublicationsPage.css";

const PublicationsPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      number: "01",
      title: "Collaborative Dialogue and Knowledge Sharing",
      content: {
        title: "Collaborative Dialogue and Knowledge Sharing",
        description:
          "Participation in Forums and Summits: Stakeholders including businesses, governments, NGOs, researchers, and community leaders, can engage in Arcadia’s dialogues, workshops, and summits to discuss real-world waste management challenges, exchange insights, and share case studies",
        description2:
          "Input for Position Papers and Reports: By contributing their knowledge, data, and expertise, stakeholders can help shape Arcadia’s research outputs (e.g., waste reports, market analyses), ensuring these documents reflect on-the-ground realities and emerging trends",
      },
    },
    {
      number: "02",
      title: "Innovation and Solution Development",
      content: {
        title: "Innovation and Solution Development",
        description:
          "Partnering in Hackathons and Campaign-BasedProjects: Companies and government bodies can team up with youth groups, startups, and sustainability leaders in hackathons and campaigns to co-develop innovative solutions to waste management and circular economy challenge",

        description2:
          "Technology Demonstration and Pilot Projects: Stakeholders can collaborate on pilot programs that test new waste management technologies or sustainable practices, using Arcadia’s platform to showcase scalable solutions.",
      },
    },
    {
      number: "03",
      title: "Supporting and Adopting Practical Solutions",
      content: {
        title: "Supporting and Adopting Practical Solutions",
        description:
          "Participation in the Solutions Fair: Stakeholders can engage in Arcadia’s Solutions Fair by showcasing their innovations, learning about cutting-edge technologies, and exploring partnerships that can drive the adoption of sustainable practices across industries.",

        description2:
          "Adoption of Best Practices and Frameworks: Government bodies, corporations, and other partners can use the action frameworks and recommendations developed by Arcadia to implement sustainable waste management strategies in their operations.",
      },
    },
    {
      number: "04",
      title: "Advocacy and Policy Engagement",
      content: {
        title: "Advocacy and Policy Engagement",
        description:
          "Advocating for Policy Change: Through Arcadia’s initiatives, stakeholders can support policy advocacy efforts that promote better waste management regulations and incentivize the circular economy, ensuring that local and national governments adopt sustainable practices.",

        description2:
          "Public Awareness Campaigns: Companies and governments can collaborate on public education and awareness campaigns led by Arcadia, aimed at driving behavioral change among consumers and businesses regarding waste reduction, reuse, and recycling.",
      },
    },
    {
      number: "05",
      title: "Resource and Funding Support",
      content: {
        title: "Resource and Funding Support",
        description:
          "Funding and Sponsorship Opportunities: Stakeholders, especially businesses and development agencies, can support Arcadia’s projects through funding or sponsorships, helping to expand the reach of waste management programs and innovation.",
        description2:
          "Leveraging Expertise: Experts in waste management, sustainability, and technology can offer pro bono consulting or advisory roles to assist Arcadia in crafting more impactful programs.",
      },
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="publications-hero">
          <div className="container">
            <div className="text-center h1-container">
              <h1 className="publications-hero-title">Your Knowledge Hub! </h1>
              <div className="header-con">
                <img src="/assets/publication/know.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Pillars Section */}
        <section className="key-pillars-section">
          <div className="container">
            <h2 className="key-pillars-title">HOW TO GET INVOLVED</h2>
            {/* <p className="key-pillars-subtitle">
              Arcadia's methodology revolves around fostering a continuous cycle
              of dialogue, knowledge sharing, and innovation, to empower
              stakeholders and drive meaningful sustainability outcomes. Our key
              publications include:
            </p> */}

            <div className="pillars-container">
              {/* Vertical Navigation */}
              <div className="pillars-nav">
                {pillars.map((pillar, index) => (
                  <div
                    key={index}
                    className={`pillar-tab ${
                      activeTab === index ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <span className="pillar-number">{pillar.number}</span>
                    <span className="pillar-title">{pillar.title}</span>
                  </div>
                ))}
              </div>

              {/* Content Area */}
              <div className="pillar-content">
                <h3 className="pillar-content-title">
                  {pillars[activeTab].content.title}
                </h3>
                <p className="pillar-content-description">
                  {pillars[activeTab].content.description}
                </p>
                <p className="pillar-content-description">
                  {pillars[activeTab].content.description2}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="market-section">
          <div className="container market-container">
            <div className="market-content">
              <h2 className="market-title">MARKET ANALYSIS</h2>
              <p className="market-description">
                Arcadia conducts in-depth market analysis to provide businesses
                with insights on the current state of the sustainability
                landscape. These analyses explore trends, opportunities,
                challenges, and key players in the transition to a circular
                economy. Our market analyses help businesses understand the
                market, identify growth areas, evaluate market shifts, and align
                their strategies with emerging demands of sustainable practices
                and consumer preferences.
              </p>
            </div>
            <div className="market-image">
              <img
                src="/assets/publication/market-analysis.png"
                alt="Circular Economy Illustration"
                className="text-gray-300 text-2xl"
              />
            </div>
          </div>
        </section>

        {/* Position Papers */}
        <section className="position-section">
          <div className="container position-container">
            <div className="position-image">
              <img
                src="/assets/publication/position-paper.jpg"
                alt="Circular Economy Illustration"
                className="text-gray-300 text-2xl"
              />
            </div>
            <div className="position-content">
              <h2 className="position-title">POSITION PAPERS</h2>
              <p className="position-description">
                Arcadia develops position papers that outline informed
                perspectives on critical sustainability issues. These papers
                offer a deep dive into solutions for specific challenges, backed
                by research and expert insights. Our position papers help to
                establish thought leadership, identify best practices, and
                provide guidance for businesses and policymakers. They serve as
                a valuable guiding resource for companies seeking to understand
                and address complex sustainability issues while enhancing their
                practices.
              </p>
            </div>
          </div>
        </section>

        {/* Reports and Manifestos */}
        <section className="market-section">
          <div className="container market-container">
            <div className="market-content">
              <h2 className="market-title">Waste Reports / Manifestos</h2>
              <p className="market-description">
                ur waste reports provide detailed assessments of current waste
                management practices, with a focus on gaps, inefficiencies, and
                opportunities for improvement. These reports highlight both
                local and global case studies, offering solutions and
                technologies that can optimize waste management processes. By
                addressing critical issues in post consumer waste, our waste
                reports empower companies, municipalities, and policymakers to
                implement effective, sustainable, and circular waste management
                strategies
              </p>
            </div>
            <div className="market-image">
              <img
                src="/assets/publication/waste.webp"
                alt="Circular Economy Illustration"
                className="text-gray-300 text-2xl"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PublicationsPage;
