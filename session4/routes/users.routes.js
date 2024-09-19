const express = require("express");
const {getUsers,getUsersbyId,getUserbyGenderorAge} =require("../controller/users.controller")
const router = express.Router();
const verifyAuth = require("../middelwares/veriftAuth");
const userSearchValitor = require("../middelwares/userSearchValitors")

router.get("/",verifyAuth,getUsers);//for single route Authentication .
router.get("/search",verifyAuth , userSearchValitor,getUserbyGenderorAge);
router.get("/:uuid",getUsersbyId);


module.exports = router;