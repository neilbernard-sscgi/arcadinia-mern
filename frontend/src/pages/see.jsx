"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Edit } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { EventModal, AddEventCard } from "../components/EventModal";
import "./EventsPage.css";

const EventsPage = () => {
  const [upcomingSlide, setUpcomingSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [editingEvent, setEditingEvent] = useState(null);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [isUpcoming, setIsUpcoming] = useState(true);

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

  const upcomingEvents = [
    {
      id: 1,
      title: "From Compliance to Circularity",
      subtitle: "Bridging the Gap with EPR for Retail Plastics",
      date: "2023-12-15",
      location: "Manila, Philippines",
      description:
        "Join us for an insightful discussion on how businesses can move beyond compliance to embrace circular economy principles.",
    },
    {
      id: 2,
      title: "Sustainable Packaging Forum",
      subtitle: "Innovations in Eco-friendly Packaging Solutions",
      date: "2024-01-20",
      location: "Cebu City, Philippines",
      description:
        "Explore the latest innovations in sustainable packaging and learn how to implement them in your business.",
    },
    {
      id: 3,
      title: "Circular Economy Workshop",
      subtitle: "Practical Strategies for Businesses",
      date: "2024-02-05",
      location: "Davao City, Philippines",
      description:
        "A hands-on workshop designed to help businesses develop and implement circular economy strategies.",
    },
    {
      id: 4,
      title: "Waste Management Symposium",
      subtitle: "Best Practices for Urban Areas",
      date: "2024-02-25",
      location: "Quezon City, Philippines",
      description:
        "Learn about effective waste management strategies for urban areas from local and international experts.",
    },
    {
      id: 5,
      title: "Green Business Summit",
      subtitle: "Sustainability as a Competitive Advantage",
      date: "2024-03-10",
      location: "Makati City, Philippines",
      description:
        "Discover how sustainability initiatives can drive business growth and create competitive advantages.",
    },
  ];

  const previousEvents = [
    {
      id: 6,
      title: "From Compliance to Circularity",
      subtitle: "Bridging the Gap with EPR for Retail Plastics",
      date: "2023-11-10",
      location: "Manila, Philippines",
      description:
        "A discussion on how businesses can move beyond compliance to embrace circular economy principles.",
    },
    {
      id: 7,
      title: "Build for Tomorrow",
      subtitle: "Shaping the Future of Construction through Sustainability",
      date: "2023-10-15",
      location: "Makati City, Philippines",
      description:
        "An exploration of sustainable construction practices and materials for the future.",
    },
    {
      id: 8,
      title: "Municipal Zero Waste—Holistic Understanding of MSW",
      subtitle: "in the Philippines, Pakistan, and China",
      date: "2023-09-20",
      location: "Virtual Event",
      description:
        "A comparative study of municipal solid waste management approaches across three Asian countries.",
    },
    {
      id: 9,
      title: "Deep Dive Dialogue: Towards a Zero Waste Nation",
      subtitle: "",
      date: "2023-08-05",
      location: "Quezon City, Philippines",
      description:
        "A dialogue on strategies and policies to achieve zero waste goals at the national level.",
    },
    {
      id: 10,
      title: "CHOPCHOP: Turning Single-Use Chopsticks into Art",
      subtitle: "",
      date: "2023-07-15",
      location: "Makati City, Philippines",
      description:
        "A creative workshop demonstrating how single-use items can be transformed into art and useful products.",
    },
  ];

  const maxUpcomingSlide = Math.max(
    0,
    upcomingEvents.length + 1 - slidesToShow
  ); // +1 for Add Event card
  const maxPreviousSlide = Math.max(
    0,
    previousEvents.length + 1 - slidesToShow
  ); // +1 for Add Event card

  const handleEditEvent = (event, isUpcomingEvent) => {
    setEditingEvent(event);
    setIsUpcoming(isUpcomingEvent);
  };

  const handleAddEvent = (isUpcomingEvent) => {
    setIsAddingEvent(true);
    setIsUpcoming(isUpcomingEvent);
  };

  const handleCloseModal = () => {
    setEditingEvent(null);
    setIsAddingEvent(false);
  };

  const handleSaveEvent = (eventData) => {
    console.log("Saving event:", eventData);
    // Here you would typically send this data to your backend
    // For now, we'll just close the modal
    handleCloseModal();
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="events-hero">
          <div className="container">
            <div className="text-center">
              <h1 className="events-hero-title">
                Foster discourse and drive
                <br />
                actionable sustainability solutions
              </h1>
            </div>
          </div>
        </section>

        {/* Deep Dive Dialogues */}
        <section className="dive-section">
          <div className="container dive-container">
            <div className="dive-content">
              <h2 className="dive-title">DEEP DIVE DIALOGUES</h2>
              <p className="dive-description">
                Our Deep Dive Dialogue sessions are structured discussions
                designed to bring together stakeholders and experts to share
                experiences on the challenges and opportunities in
                sustainability. The sessions will be focused on sharing
                on-the-ground challenges, case studies, good and bad practices,
                as well as solutions, technologies, and best practices adopted
                by other countries.
              </p>
              <div className="dive-tags">
                Forums, Panel Discussions, Fireside Chats, Summits
              </div>
            </div>
            <div className="dive-image">
              <div className="text-gray-300 text-2xl">×</div>
            </div>
          </div>
        </section>

        {/* Hackathons and Campaigns */}
        <section className="hackathon-section">
          <div className="container hackathon-container">
            <div className="hackathon-image">
              <div className="text-gray-300 text-2xl">×</div>
            </div>
            <div className="hackathon-content">
              <h2 className="hackathon-title">HACKATHONS AND CAMPAIGNS</h2>
              <p className="hackathon-description">
                Arcadia organizes hackathons and campaigns which focus designed
                to engage diverse stakeholders in developing innovative
                solutions to various sustainability challenges. These
                interactive hands-on sessions invite companies, young leaders,
                and students to collaborate in developing creative and practical
                solutions to specific sustainability challenges. This approach
                fosters a "design thinking" mindset, encourages cross-sector
                networking, and drives the development of actionable
                solutions—pathways to encourage and drive commitment.
              </p>
              <div className="hackathon-tags">
                Hackathons, Workshops and Trainings
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="upcoming-section">
          <div className="container">
            <h2 className="upcoming-title">Upcoming Events</h2>

            <div className="carousel">
              {/* Carousel container */}
              <div className="carousel-container">
                <div
                  className="carousel-track"
                  style={{
                    transform: `translateX(-${
                      (upcomingSlide * 100) / slidesToShow
                    }%)`,
                  }}
                >
                  {upcomingEvents.map((event, i) => (
                    <div key={i} className="carousel-item">
                      <button
                        className="edit-button"
                        onClick={() => handleEditEvent(event, true)}
                      >
                        <Edit size={14} /> Edit
                      </button>
                      <div className="carousel-image">
                        <div className="text-gray-300 text-2xl">×</div>
                      </div>
                      <h3 className="carousel-title">{event.title}</h3>
                      <p className="carousel-description">{event.subtitle}</p>
                      <button className="component-item-button">
                        LEARN MORE
                      </button>
                    </div>
                  ))}

                  {/* Add Event Card */}
                  <AddEventCard onClick={() => handleAddEvent(true)} />
                </div>
              </div>

              {/* Navigation buttons */}
              {upcomingEvents.length + 1 > slidesToShow && (
                <>
                  <button
                    onClick={() =>
                      setUpcomingSlide((prev) => Math.max(0, prev - 1))
                    }
                    className="carousel-button carousel-button-prev"
                    disabled={upcomingSlide === 0}
                  >
                    <ChevronLeft
                      className={`h-5 w-5 ${
                        upcomingSlide === 0 ? "text-gray-300" : "text-gray-700"
                      }`}
                    />
                  </button>
                  <button
                    onClick={() =>
                      setUpcomingSlide((prev) =>
                        Math.min(maxUpcomingSlide, prev + 1)
                      )
                    }
                    className="carousel-button carousel-button-next"
                    disabled={upcomingSlide >= maxUpcomingSlide}
                  >
                    <ChevronRight
                      className={`h-5 w-5 ${
                        upcomingSlide >= maxUpcomingSlide
                          ? "text-gray-300"
                          : "text-gray-700"
                      }`}
                    />
                  </button>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Previous Events */}
        <section className="previous-section">
          <div className="container">
            <h2 className="previous-title">Previous Events</h2>

            <div className="carousel">
              {/* Carousel container */}
              <div className="carousel-container">
                <div
                  className="carousel-track"
                  style={{
                    transform: `translateX(-${
                      (previousSlide * 100) / slidesToShow
                    }%)`,
                  }}
                >
                  {previousEvents.map((event, i) => (
                    <div key={i} className="carousel-item">
                      <button
                        className="edit-button"
                        onClick={() => handleEditEvent(event, false)}
                      >
                        <Edit size={14} /> Edit
                      </button>
                      <div className="carousel-image">
                        <div className="text-gray-300 text-2xl">×</div>
                      </div>
                      <h3 className="carousel-title">{event.title}</h3>
                      <p className="carousel-description">{event.subtitle}</p>
                      <button className="component-item-button">
                        LEARN MORE
                      </button>
                    </div>
                  ))}

                  {/* Add Event Card */}
                  <AddEventCard onClick={() => handleAddEvent(false)} />
                </div>
              </div>

              {/* Navigation buttons */}
              {previousEvents.length + 1 > slidesToShow && (
                <>
                  <button
                    onClick={() =>
                      setPreviousSlide((prev) => Math.max(0, prev - 1))
                    }
                    className="carousel-button carousel-button-prev"
                    disabled={previousSlide === 0}
                  >
                    <ChevronLeft
                      className={`h-5 w-5 ${
                        previousSlide === 0 ? "text-gray-300" : "text-gray-700"
                      }`}
                    />
                  </button>
                  <button
                    onClick={() =>
                      setPreviousSlide((prev) =>
                        Math.min(maxPreviousSlide, prev + 1)
                      )
                    }
                    className="carousel-button carousel-button-next"
                    disabled={previousSlide >= maxPreviousSlide}
                  >
                    <ChevronRight
                      className={`h-5 w-5 ${
                        previousSlide >= maxPreviousSlide
                          ? "text-gray-300"
                          : "text-gray-700"
                      }`}
                    />
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Edit Event Modal */}
      {editingEvent && (
        <EventModal
          event={editingEvent}
          onClose={handleCloseModal}
          onSave={handleSaveEvent}
        />
      )}

      {/* Add Event Modal */}
      {isAddingEvent && (
        <EventModal
          isAdd={true}
          onClose={handleCloseModal}
          onSave={handleSaveEvent}
        />
      )}
    </div>
  );
};

export default EventsPage;
