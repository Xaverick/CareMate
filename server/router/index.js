const express = require("express");

const diseasesRoutes = require("./diseases");
const taskRoutes = require("./Tasks");
const userRoutes = require("./User");
const challengesRoutes = require("./Challenges");

const router = express.Router();

console.log("inside index route ");

router.use("/diseases", diseasesRoutes);
router.use("/tasks", taskRoutes);
router.use("/challenges", challengesRoutes);
router.use("/user", userRoutes);

module.exports = router;
