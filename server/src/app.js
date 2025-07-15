/** @format */

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import projectsRoutes from "./routes/projects.js";
import clientsRoutes from "./routes/clients.js";
import contactsRoutes from "./routes/contacts.js";
import subscribersRoutes from "./routes/subscribers.js";

dotenv.config();

const app = express();
app.use(cors(), express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/projects", projectsRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/contacts", contactsRoutes);
app.use("/api/subscribers", subscribersRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

export default app;
