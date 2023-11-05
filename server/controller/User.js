const User = require("../models/User");

async function createUser(req, res) {
  try {
    const userData = req.body;
    console.log("req :", req.body);
    const newUser = new User(userData);
    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user" });
  }
}

async function verifyUser(req, res) {
  const { email, password } = req.query;

  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ user });
    }
  } catch (error) {
    console.error("Error checking user:", error);
    res.status(500).json({ error: "An error occurred while checking user" });
  }
}

async function getUserDetailsByemail(req, res) {
  const { email } = req.params;
  console.log("emak :", email);
  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ user });
    }
  } catch (error) {
    console.error("Error checking user:", error);
    res.status(500).json({ error: "An error occurred while checking user" });
  }
}

module.exports = {
  createUser,
  verifyUser,
  getUserDetailsByemail,
};
