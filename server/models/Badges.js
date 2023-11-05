const mongoose = require("mongoose");

const BadgesSchema = new mongoose.Schema({
  name: String,
  level: Number,
  img: String,
  score: Number,
});

const Badges = mongoose.model("Badges", BadgesSchema);

module.exports = Badges;
