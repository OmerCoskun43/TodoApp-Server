const express = require("express");
const app = express();
const router = require("./routes/route");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

//! Connect to MongoDB
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error:", err);
  });

//  middleware
app.use(express.json());
app.use(cors());

app.use("/api", router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port} `);
});
