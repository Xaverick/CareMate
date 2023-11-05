const express = require("express");
const taskController = require("../controller/Tasks");

const router = express.Router();

router.post("/create", taskController.createTask);
router.get("/:diseasesname", taskController.getTasksByDiseasesName);

module.exports = router;
