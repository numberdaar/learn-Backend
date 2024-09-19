const express = require("express");
const dotenv= require("dotenv");
dotenv.config();

const currencyRouter = require("./routes/currencies.routes")
const usersRouter = require("./routes/users.routes")
const app = express();
const PORT = 8082;

app.get("/" , (req,res) =>{
    res.send("<h1>Currency Database</h1>")
});
app.use("/currency",currencyRouter);

app.use("/users",usersRouter)


app.listen(PORT ,()=>{
    console.log(`Server running on ${PORT}`);
})