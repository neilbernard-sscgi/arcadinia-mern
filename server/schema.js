import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false, // Optional field
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL of the image
    required: false, // Optional
  },
  isUpcoming: {
    type: Boolean,
    default: true, // Flag to distinguish upcoming and previous events
  },
});

export const Event = mongoose.model("Event", eventSchema);
