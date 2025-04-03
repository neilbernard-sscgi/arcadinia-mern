"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { ChevronRight, ChevronLeft, Edit, Trash2 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { EventModal, AddEventCard } from "../components/EventModal";
import "./EventsPage.css";

const EventsPage = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [previousEvents, setPreviousEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [upcomingSlide, setUpcomingSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  const [editingEvent, setEditingEvent] = useState(null);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [isUpcoming, setIsUpcoming] = useState(true);

  const API_URL = "https://arcadinia-server.vercel.app/events";


  // ✅ Fetch events on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(API_URL);
        const events = response.data;

        // Split into upcoming and previous events based on date
        const now = new Date().toISOString().split("T")[0]; // Current date in YYYY-MM-DD format

        const upcoming = events.filter((event) => event.date >= now);
        const previous = events.filter((event) => event.date < now);

        setUpcomingEvents(upcoming);
        setPreviousEvents(previous);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Failed to load events. Please try again later.");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // ✅ Responsive slides
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

  const maxUpcomingSlide = Math.max(
    0,
    upcomingEvents.length + 1 - slidesToShow
  );
  const maxPreviousSlide = Math.max(
    0,
    previousEvents.length + 1 - slidesToShow
  );

  // ✅ Handle Edit Event
  const handleEditEvent = (event, isUpcomingEvent) => {
    setEditingEvent(event);
    setIsUpcoming(isUpcomingEvent);
  };

  // ✅ Handle Add Event
  const handleAddEvent = (isUpcomingEvent) => {
    setIsAddingEvent(true);
    setIsUpcoming(isUpcomingEvent);
  };

  // ✅ Handle Delete Event
  const handleDeleteEvent = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUpcomingEvents((prev) => prev.filter((event) => event._id !== id));
      setPreviousEvents((prev) => prev.filter((event) => event._id !== id));
      handleCloseModal();
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete the event.");
    }
  };

  // ✅ Handle Save Event (for both add and edit)
  const handleSaveEvent = async (eventData) => {
    try {
      if (editingEvent) {
        // Edit event
        await axios.put(`${API_URL}/${editingEvent._id}`, eventData);
        setEditingEvent(null);
      } else {
        // Add new event
        await axios.post(API_URL, eventData);
        setIsAddingEvent(false);
      }

      // Refresh event list
      const response = await axios.get(API_URL);
      const events = response.data;

      const now = new Date().toISOString().split("T")[0];

      const upcoming = events.filter((event) => event.date >= now);
      const previous = events.filter((event) => event.date < now);

      setUpcomingEvents(upcoming);
      setPreviousEvents(previous);
    } catch (error) {
      console.error("Error saving event:", error);
      alert("Failed to save event.");
    }
  };

  // ✅ Handle Close Modal
  const handleCloseModal = () => {
    setEditingEvent(null);
    setIsAddingEvent(false);
  };

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="events-hero">
          <div className="container">
            <div className="text-center">
              <h1 className="events-hero-title">Events & Collaboration</h1>
              <div className="header-con">
                <img src="/assets/event/eventcollab.png" alt="" />
              </div>
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
              <img
                className="text-gray-300 text-2xl"
                src="/assets/event/talk.jpg"
              />
            </div>
          </div>
        </section>

        {/* Hackathons and Campaigns */}
        <section className="hackathon-section">
          <div className="container hackathon-container">
            <div className="hackathon-image">
              <img
                className="text-gray-300 text-2xl"
                src="/assets/event/hack.jpg"
              />
            </div>
            <div className="hackathon-content">
              <h2 className="hackathon-title">HACKATHONS AND CAMPAIGNS</h2>
              <p className="hackathon-description">
                Arcadia organizes hackathons and campaign-driven events designed
                to bring together innovative minds and passionate advocates to
                solve real-world sustainability challenges. These immersive,
                hands-on sessions invite companies, young leaders, and experts
                to collaborate in developing creative solutions, while aligning
                with corporate sustainability goals and advocacy efforts.
                Through these events, we foster the rapid prototyping of ideas,
                accelerate problem-solving, and drive the development of
                actionable strategies for environmental and social impact.
              </p>
              <div className="hackathon-tags">
                Hackathons, Workshops and Trainings
              </div>
            </div>
          </div>
        </section>
        <section className="upcoming-section">
          <div className="container">
            <h2 className="upcoming-title">Upcoming Events</h2>

            <div className="carousel">
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

                      {event.image ? (
                        <div className="carousel-image">
                          <img src={event.image} alt={event.title} />
                        </div>
                      ) : (
                        <div className="carousel-image">
                          <div className="text-gray-300 text-2xl">×</div>
                        </div>
                      )}

                      <h3 className="carousel-title">{event.title}</h3>
                      <p className="carousel-description">{event.subtitle}</p>
                      <button className="component-item-button">
                        LEARN MORE
                      </button>
                    </div>
                  ))}

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

        <section className="previous-section">
          <div className="container">
            <h2 className="previous-title">Previous Events</h2>

            <div className="carousel">
              <div className="carousel-container">
                <div
                  className="carousel-track"
                  style={{
                    transform: `translateX(-${
                      (previousSlide * 100) / slidesToShow
                    }%)`,
                  }}
                >
                  {previousEvents.map((event) => (
                    <div key={event._id} className="carousel-item">
                      <div className="flex justify-between">
                        <button
                          className="edit-button"
                          onClick={() => handleEditEvent(event, false)}
                        >
                          <Edit size={14} /> Edit
                        </button>
                        {/* <button
                          className="delete-button"
                          onClick={() => handleDeleteEvent(event._id)}
                        >
                          <Trash2 size={14} /> Delete
                        </button> */}
                      </div>

                      {event.image ? (
                        <div className="carousel-image">
                          <img src={event.image} alt={event.title} />
                        </div>
                      ) : (
                        <div className="carousel-image">
                          <div className="text-gray-300 text-2xl">×</div>
                        </div>
                      )}

                      <h3 className="carousel-title">{event.title}</h3>
                      <p className="carousel-description">{event.subtitle}</p>
                      <p className="carousel-description">{event.date}</p>
                      <p className="carousel-description">{event.location}</p>
                    </div>
                  ))}

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

      {editingEvent && (
        <EventModal
          event={editingEvent}
          onClose={handleCloseModal}
          onSave={handleSaveEvent}
          handleDeleteEvent={handleDeleteEvent}
        />
      )}
      {isAddingEvent && (
        <EventModal
          isAdd={true}
          onClose={handleCloseModal}
          onSave={handleSaveEvent}
          handleDeleteEvent={handleDeleteEvent}
        />
      )}
    </div>
  );
};

export default EventsPage;
