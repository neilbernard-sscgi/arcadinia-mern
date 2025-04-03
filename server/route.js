import express from "express";
import { Event } from "./schema.js";

const router = express.Router();

// Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Get a single event by ID
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).send({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Add a new event
router.post("/", async (req, res) => {
  try {
    const { title, subtitle, date, location, description, image, isUpcoming } =
      req.body;

    if (!title || !date || !location || !description) {
      return res
        .status(400)
        .send({ message: "Please fill all required fields" });
    }

    const newEvent = new Event({
      title,
      subtitle,
      date,
      location,
      description,
      image,
      isUpcoming,
    });

    await newEvent.save();
    res.status(201).send(newEvent);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Update an event by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).send({ message: "Event not found" });
    }

    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Delete an event by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);

    if (!deletedEvent) {
      return res.status(404).send({ message: "Event not found" });
    }

    res.status(200).send({ message: "Event deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
