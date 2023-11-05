const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3030;
const reminder = require("./cron-jobs/remainder");

const router = require("./router");

// Enable CORS
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL);

app.use("/", router);

// app.get("/", (req, res) => {
//   res.json("test api");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
