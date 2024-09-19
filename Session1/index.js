const curriencies = require("./curriencies.json");
const { json } = require("express");
const express = require("express");
const checks = require("./browser.middelware.js")
const app = express();
const PORT = 8082;

app.get("/browser" , checks, (req,res) =>{
    console.log(`hye`)
    res.send(curriencies.data);
});
app.listen(PORT,() =>{
    console.log(`Server running on ${PORT}`);
});