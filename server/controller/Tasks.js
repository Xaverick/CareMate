const Task = require("../models/Challenges");

async function createTask(req, res) {
  try {
    const TaskData = req.body;
    const newTask = new Task(TaskData);
    await newTask.save();

    res.status(201).json({ message: "Task created successfully", Task: newTask });
  } catch (error) {
    console.error("Error creating Task:", error);
    res.status(500).json({ error: "An error occurred while creating the Task" });
  }
}

async function getTasksByDiseasesName(req, res) {
    try {
      const diseasesname = req.params.diseasesname;
      const questions = await Task.find({ diseasesname }, "questions");
  
      if (questions.length === 0) {
        res.status(404).json({ message: "No questions found for the specified diseasesname" });
      } else {
        res.status(200).json({ questions });
      }
    } catch (error) {
      console.error("Error fetching questions by diseasesname:", error);
      res.status(500).json({ error: "An error occurred while fetching questions" });
    }
  }

module.exports = {
  createTask,
  getTasksByDiseasesName,
};
