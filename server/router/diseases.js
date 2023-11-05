const express = require("express");

const DiseasesController = require("../controller/diseases");

const router = express.Router();

router.post("/create", DiseasesController.CreateDiseases);

// here by disease name passed we will get all the questions related to it 
router.get("/:disease", DiseasesController.GetDiseasesByName);

module.exports = router;
