const mongoose = require("mongoose");

const DiseasesSchema = new mongoose.Schema({
  name: String,
  questions: [String],
});

const Diseases = mongoose.model("Diseases", DiseasesSchema);

module.exports = Diseases;
