/** @format */

// routes/clients.js
import express from "express";
import Client from "../models/Client.js";
const router = express.Router();
router.get("/", async (req, res) =>
  res.json(await Client.find().sort("-createdAt"))
);
router.post("/", async (req, res) => res.json(await Client.create(req.body)));
router.delete("/:id", async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});
export default router;
