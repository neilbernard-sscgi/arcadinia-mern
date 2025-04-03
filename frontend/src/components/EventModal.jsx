"use client";

import { useState, useEffect } from "react";
import { X, Plus } from "lucide-react";
import "./EventModal.css";

export const EventModal = ({
  event,
  onClose,
  onSave,
  isAdd = false,
  handleDeleteEvent,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    date: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    if (event && !isAdd) {
      setFormData({
        title: event.title || "",
        subtitle: event.subtitle || "",
        date: event.date || "",
        location: event.location || "",
        description: event.description || "",
      });
    }
  }, [event, isAdd]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {isAdd ? "Add New Event" : "Edit Event"}
          </h2>
          <button className="modal-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-input"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="subtitle">
              Subtitle
            </label>
            <input
              type="text"
              id="subtitle"
              name="subtitle"
              className="form-input"
              value={formData.subtitle}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="form-input"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="form-input"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="form-textarea"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              Cancel
            </button>
            {!isAdd && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDeleteEvent(event._id)}
              >
                Delete
              </button>
            )}
            <button type="submit" className="btn btn-primary">
              {isAdd ? "Add Event" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const AddEventCard = ({ onClick }) => {
  return (
    <div className="carousel-item">
      <div className="add-event-card" onClick={onClick}>
        <div className="add-event-icon">
          <Plus size={32} />
        </div>
        <div className="add-event-text">Add New Event</div>
      </div>
    </div>
  );
};
