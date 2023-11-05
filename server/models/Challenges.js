const mongoose = require("mongoose");


const ChallengesSchema = new mongoose.Schema({
  question: String,
  options: [String],
});

const Challenges = mongoose.model("Challenges", ChallengesSchema);

module.exports = Challenges;
