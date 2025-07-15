/** @format */

// routes/subscribers.js
import express from "express";
import Subscriber from "../models/Subscriber.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const subs = await Subscriber.find().sort("-createdAt");
  res.json(subs);
});

router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  try {
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Email already subscribed." });
    }

    const newSub = new Subscriber({ email });
    await newSub.save();
    res.status(201).json(newSub);
  } catch (err) {
    console.error("Error saving subscriber:", err);
    res.status(500).json({ message: "Internal server error." });
  }
});

router.delete("/:id", async (req, res) => {
  await Subscriber.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;
