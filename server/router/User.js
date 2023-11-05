const express = require("express");

const UserController = require("../controller/User");

const router = express.Router();

router.post("/create", UserController.createUser);

router.get("/:email",UserController.getUserDetailsByemail );
router.get("/check", UserController.verifyUser);

module.exports = router;
