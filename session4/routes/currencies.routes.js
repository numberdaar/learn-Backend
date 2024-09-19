// const router = require("express").Router();
const express = require("express");
const {getCurrencies,getCurrenciesbysymbol} =require("../controller/currencies.controller")
const router = express.Router();

router.get("/" ,getCurrencies);
router.get("/:symboltype" , getCurrenciesbysymbol);

module.exports = router;