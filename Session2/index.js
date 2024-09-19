const express = require("express");
const {getCurrencies,getCurrenciesbysymbol} =require("./controller/currencies.controller")
const {getUsers,getUsersbyId,getUserbyGenderorAge} =require("./controller/users.controller")

const app = express();
const PORT = 8082;

app.get("/" , (req,res) =>{
    res.send("<h1>Currency Database</h1>")
});
app.get("/currency" ,getCurrencies);
app.get("/currency/:symboltype" , getCurrenciesbysymbol);

app.get("/users",getUsers);
app.get("/users/search",getUserbyGenderorAge);
app.get("/users/:uuid",getUsersbyId);

app.listen(PORT ,()=>{
    console.log(`Server running on ${PORT}`);
})