const Challenges = require("../models/Challenges");

async function createChallenge(req, res) {
  try {
    const challengeData = req.body;
    const newChallenge = new Challenges(challengeData);
    await newChallenge.save();

    res.status(201).json({
      message: "Challenge created successfully",
      challenge: newChallenge,
    });
  } catch (error) {
    console.error("Error creating challenge:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the challenge" });
  }
}

async function getChallenges(req, res) {
  try {
    const challenges = await Challenges.find();
    res.status(200).json({ challenges });
  } catch (error) {
    console.error("Error fetching challenges:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching challenges" });
  }
}

// Add more controller functions as needed (e.g., update challenge, delete challenge, get challenge by ID, etc.)

module.exports = {
  createChallenge,
  getChallenges,
};
