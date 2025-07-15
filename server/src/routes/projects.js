/** @format */

// routes/projects.js
import express from "express";
import Project from "../models/Project.js";
const router = express.Router();
router.get("/", async (req, res) =>
  res.json(await Project.find().sort("-createdAt"))
);
router.post("/", async (req, res) => res.json(await Project.create(req.body)));
router.delete("/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});
export default router;
