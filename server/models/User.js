const mongoose = require("mongoose");
const Badges = require("./Badges");

const UserDiseasesSchema = new mongoose.Schema({
  // Define a reference to the Diseases model
  diseases: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Diseases",
    },
  ],
});

const ProgressSchema = new mongoose.Schema({
  score: Number,
  badges: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Badges",
    },
  ],
  health: Number,
  streak: Number,
});

// const RegistrationResponseSchema = new mongoose.Schema({
//   question: String,
//   response: String,
// });

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  userDiseases: String,
  // userProgress: ProgressSchema,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;