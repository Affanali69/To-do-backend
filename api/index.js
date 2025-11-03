const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected!"))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// ✅ Routes
const todoRouter = require("../routes/todo");
app.use("/api/todos", todoRouter);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("Todo App API is running!");
});

// ❌ REMOVE app.listen() (Vercel handles this automatically)
// ✅ Export the app instead
module.exports = app;
