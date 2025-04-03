"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    {
      title: "PLASTIC PATHWAYS",
      subtitle: "Leading the Way in Plastic Reuse and Reduction",
      about:
        "This project is focused on addressing the growing plastic pollution crisis by promoting the reduction, reuse, and recycling of plastics. This initiative collaborates with retail companies, e-commerce platforms, and manufacturers to explore innovative packaging alternatives, establish circular systems for plastic recovery, and reduce reliance on single-use plastics. Arcadia also drives public awareness campaigns and advocates for policy changes to enhance plastic waste management systems in the Philippines",
      focus: "Circular plastic systems, sustainable packaging, waste reduction",
      target: "Retailers, manufacturers, policymakers, sustainability leaders",
      img: "/assets/home/plastic-re.jpg",
    },
    {
      title: "TechCycle",
      subtitle: "Closing the Loop on E-Waste",
      about:
        "TechCycle Project is designed to address the complex challenges posed by discarded electronic devices. Through partnerships with technology companies, recyclers, and regulatory bodies, Arcadia works to develop sustainable e-waste management solutions that emphasize recycling, reuse, and responsible disposal. This project also raises awareness about the environmental and health risks of improper e-waste disposal and advocates for extended producer responsibility",
      focus:
        ": E-waste recycling, responsible disposal, circular technology systems",
      target: "Electronics manufacturers, recyclers, government regulators",
      img: "/assets/home/tech-re.png",
    },
    {
      title: "FOOD FORWARD",
      subtitle: "From Food Waste to Resource",
      about:
        "Arcadia’s Food Waste Project aims to minimize food waste at every level of the supply chain—from production to consumption. Through partnerships with businesses, local governments, and non-profits, we promote efficient food waste management practices, including redistributing surplus food to communities in need, creating sustainable business models for food recovery, and supporting innovations in waste-to-energy solutions.",
      focus:
        "Supply chain optimization, food recovery, waste-to-energy innovations",
      target:
        "Restaurants, food manufacturers, retailers, municipal government",
      img: "/assets/home/food-re.jpg",
    },
  ];
  const logos = [
    "/assets/company-logos/fb.png",
    "/assets/company-logos/gm.png",
    "/assets/company-logos/ig.png",
    "/assets/company-logos/ms.png",
    "/assets/company-logos/pi.png",
    "/assets/company-logos/sp.png",
    "/assets/company-logos/tw.png",
    "/assets/company-logos/w.png",
    "/assets/company-logos/yt.png",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Driving Progress Towards a Circular Economy
              </h1>
              <p className="hero-description">
                <i>
                  Arcadia is a sustainability hub for companies committed to
                  advancing sustainability practices and accelerating the
                  transition to a circular economy.
                </i>
              </p>
              <p className="hero-description-2">
                As a hub, it facilitates the exchange of leading sustainability
                practices and resources, fostering the development of cost-
                effective and efficient solutions to sustainability challenges
              </p>
              <button className="hero-button">LEARN MORE</button>
            </div>
            <div className="hero-image">
              <img src="/assets/home.png" alt="Circular Economy Illustration" />
            </div>
          </div>
        </section>

        {/* Network Section */}
        <section className="network-section">
          <div className="container network-content">
            <div className="network-text">
              <h2 className="network-title">A Growing Network for Impact</h2>
              <p className="network-description">
                Arcadia brings together a diverse ecosystem of changemakers—
                including the academic, local and national government agencies,
                NGOs, industry associations, and hundreds of pioneering
                businesses. By fostering cross-sector collaboration, we ensure
                that our work creates impact at multiple scales, contributing to
                long-term sustainability.
              </p>
            </div>
            <div className="network-grid">
              {logos.map((src, index) => (
                <div key={index} className="network-item">
                  <img src={src} alt={`company-logo-${index}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Three Key Components */}
        <section className="components-section">
          <div className="container">
            <h2 className="component-title">Key Pillars Overview</h2>
            <p className="component-description">
              Arcadia’s methodology revolves around fostering a continuous cycle
              of dialogue, knowledge sharing, and innovation, to empower
              stakeholders and drive meaningful sustainability outcomes. Our key
              pillars include.
            </p>

            <div className="component-grid">
              {/* Events */}
              <div>
                <div className="component-item-icon">
                  <img src="/assets/home/event.jpg" alt="event picture" />
                </div>
                <h3 className="component-item-title">EVENTS & COLLABORATION</h3>
                <p className="component-item-description">
                  Arcadia serves as a platform that brings together youth,
                  businesses, researchers, governments, and industry experts
                  through forums, summits, workshops, and hackathons. These
                  events are designed to foster meaningful dialogue on
                  sustainability challenges, share best practices, explore
                  emerging policies, and discuss innovative solutions.
                </p>
                {/* <p className="component-item-description">
                By
                  connecting diverse stakeholders, we facilitate knowledge
                  exchange and the exploration of new topics critical to driving
                  the sustainability agenda forward
                  Additionally, our hackathons and campaign-driven projects
                  enable companies to engage with young innovators to solve
                  pressing challenges, support advocacy efforts, and amplify
                  information and education campaigns. Through these
                  collaborative initiatives, Arcadia empowers stakeholders to
                  co-create actionable solutions that address real-world
                  sustainability issues, ensuring progress toward a more
                  sustainable future.
                </p> */}
                <button className="component-item-button">LEARN MORE</button>
              </div>

              {/* Knowledge Portal */}
              <div>
                <div className="component-item-icon">
                  <img
                    src="/assets/home/knowledge.jpg"
                    alt="knowledge picture"
                  />
                </div>
                <h3 className="component-item-title">KNOWLEDGE HUB</h3>
                <p className="component-item-description">
                  Arcadia serves as a centralized resource for cutting-edge
                  research, actionable insights, and real-world case studies
                  that drive the transition to a circular economy.
                </p>
                {/* <p className="component-item-description">
                  Our hub offers a wealth of knowledge, including detailed
                  reports, expert recommendations, and impactful manifestos,
                  providing businesses, policymakers, and innovators with the
                  tools they need to implement sustainable practices. By
                  synthesizing global best practices and emerging trends, we
                  empower stakeholders to make informed decisions and foster
                  sustainable solutions that address pressing environmental
                  challenges
                </p> */}
                <button className="component-item-button">LEARN MORE</button>
              </div>

              {/* Innovation and Solution Exchange */}
              <div>
                <div className="component-item-icon">
                  <img
                    src="/assets/home/solution.jpg"
                    alt="solution pictures"
                  />
                </div>
                <h3 className="component-item-title">
                  INNOVATION & SOLUTIONS EXCHANGE
                </h3>
                <p className="component-item-description">
                  Arcadia collaborates with forward-thinking companies to
                  showcase cutting-edge solutions and technologies that
                  accelerate the transition to a circular economy. Through our
                  platform, we connect innovators, businesses, and industry
                  leaders to exchange ideas and showcase scalable, impactful
                  {/* solutions that address sustainability challenges. We actively
                  support initiatives that promote green growth and sustainable
                  development, driving the adoption of advanced technologies and
                  best practices across sectors. By fostering collaboration, we
                  enable stakeholders to implement transformative strategies
                  that reduce environmental impact and contribute to a
                  sustainable, circular future. */}
                </p>
                <button className="component-item-button">LEARN MORE</button>
              </div>
            </div>
          </div>
        </section>

        {/* project section */}
        <section className="context-section">
          <div className="container h-container">
            <div className="context-header">
              <h2 className="context-title">FLAGSHIP PROJECTS</h2>
              {/* <div>
                <span className="context-subtitle">
                  Local Challenges, Global Relevance
                </span>
              </div> */}
            </div>
            <p className="context-description">
              Our flagship projects bring together key stakeholders to address
              pressing waste challenges through collaborative dialogue and
              innovation. By assessing on-the-ground realities and identifying
              gaps, we harness feedback, insights, and our network of experts to
              develop actionable frameworks. These initiatives provide
              practical, scalable solutions and recommendations for companies
              and communities to effectively tackle waste management issues,
              fostering sustainable change and advancing circular economy
              practices.
            </p>

            <div className="carousel">
              {/* Carousel container */}
              <div className="carousel-container">
                <div
                  className="carousel-track"
                  style={{
                    transform: `translateX(-${
                      (currentSlide * 100) / slidesToShow
                    }%)`,
                  }}
                >
                  {items.map((item, i) => (
                    <div key={i} className="carousel-item">
                      <div className="carousel-image">
                        <img
                          src={item.img}
                          alt={`${item.img}`}
                          className="text-gray-300 text-2xl"
                        />
                      </div>
                      <h3 className="carousel-title">{item.title}</h3>
                      <p className="carousel-description">{item.about}</p>
                      <button className="component-item-button">
                        LEARN MORE
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {slidesToShow < items.length && (
                <>
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) => Math.max(0, prev - 1))
                    }
                    className="carousel-button carousel-button-prev"
                    disabled={currentSlide === 0}
                  >
                    <ChevronLeft
                      className={`h-5 w-5 ${
                        currentSlide === 0 ? "text-gray-300" : "text-gray-700"
                      }`}
                    />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlide((prev) =>
                        Math.min(items.length - slidesToShow, prev + 1)
                      )
                    }
                    className="carousel-button carousel-button-next"
                    disabled={currentSlide >= items.length - slidesToShow}
                  >
                    <ChevronRight
                      className={`h-5 w-5 ${
                        currentSlide >= items.length - slidesToShow
                          ? "text-gray-300"
                          : "text-gray-700"
                      }`}
                    />
                  </button>
                </>
              )}

              {/* Dots indicator */}
              <div className="carousel-dots">
                {Array.from({
                  length: Math.max(1, items.length - slidesToShow + 1),
                }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`carousel-dot ${
                      currentSlide === i ? "active" : ""
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Arcadia */}
        <section className="about-section">
          <div className="container">
            <h2 className="about-title">SOLUTIONS FAIR</h2>
            <p className="about-description">
              Our Solutions Fair is an avenue where innovators, businesses, and
              sustainability leaders come together to showcase cutting edge
              solutions and technologies that address critical environmental
              challenges. This event serves as a marketplace for sustainable
              products, services, and practices, offering participants the
              opportunity to discover, evaluate, and adopt innovative approaches
              to waste management, circular economy strategies, and green growth
            </p>
            <p className="about-description">
              The Solutions Fair encourages collaboration and knowledge
              exchange, connecting local stakeholders with global innovators to
              drive the implementation of impactful solutions. It is a unique
              opportunity for companies to pitch their sustainable technologies,
              explore potential partnerships, and gain insights into emerging
              trends that are shaping the future of sustainability.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
