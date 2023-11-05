const express = require("express");

const UserController = require("../controller/User");

const router = express.Router();

router.post("/create", UserController.createUser);

router.get("/email/:email",UserController.getUserDetailsByemail );
router.post("/login", UserController.verifyUser);

module.exports = router;
