const express = require("express");
const {getUsers,getUsersbyId,getUserbyGenderorAge} =require("../controller/users.controller")
const router = express.Router();

router.get("/",getUsers);
router.get("/search",getUserbyGenderorAge);
router.get("/:uuid",getUsersbyId);


module.exports = router;