/** @format */

import express from "express";
import ContactForm from "../models/ContactForm.js";

const router = express.Router();

// GET all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await ContactForm.find().sort("-createdAt");
    res.json(contacts);
  } catch (err) {
    console.error("Error fetching contacts:", err);
    res.status(500).json({ message: "Internal server error." });
  }
});

// POST a new contact
router.post("/", async (req, res) => {
  const { fullName, emailAddress, mobileNumber, city } = req.body;

  // Simple validation
  if (!fullName || !emailAddress || !mobileNumber || !city) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newContact = new ContactForm({
      fullName,
      emailAddress,
      mobileNumber,
      city,
    });

    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    console.error("Error saving contact form:", err);
    res.status(500).json({ message: "Internal server error." });
  }
});

// DELETE a contact
router.delete("/:id", async (req, res) => {
  try {
    await ContactForm.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    console.error("Error deleting contact:", err);
    res.status(500).json({ message: "Failed to delete contact." });
  }
});

export default router;
