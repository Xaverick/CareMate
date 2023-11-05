const express = require("express");
const challengeController = require("../controller/Challenges");

const router = express.Router();

router.post("/create", challengeController.createChallenge);
router.get("/", challengeController.getChallenges);

module.exports = router;
