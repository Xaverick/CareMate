const Diseases = require("../models/Diseases");

async function CreateDiseases(req, res) {
  try {
    const { name, questions } = req.body;
    const newDisease = new Diseases({
      name,
      questions,
    });
    await newDisease.save();
    res
      .status(201)
      .json({ message: "Disease created successfully", disease: newDisease });
  } catch (error) {
    console.error("Error creating disease:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the disease" });
  }
}

async function GetDiseasesByName(req, res) {
  try {
    const { disease } = req.params; // Assuming the disease name is passed as a route parameter

    // Search for diseases in the database by name
    const matchingDiseases = await Diseases.find({ name: disease });

    if (matchingDiseases.length === 0) {
      res
        .status(404)
        .json({ message: "No diseases found with the given name" });
    } else {
      res.status(200).json({ diseases: matchingDiseases });
    }
  } catch (error) {
    console.error("Error fetching diseases by name:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching diseases by name" });
  }
}

module.exports = {
  GetDiseasesByName,
  CreateDiseases,
};
