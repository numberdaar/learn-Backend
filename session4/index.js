const express = require("express");
const dotenv= require("dotenv");
dotenv.config();
const currencyRouter = require("./routes/currencies.routes")
const usersRouter = require("./routes/users.routes")
const blogsRouter = require("./routes/blogs.routes")
const connectDB = require("./db/connect")
// const verifyAuth = require("./middelwares/veriftAuth");
const app = express();
const PORT = 8082;

// app.use(verifyAuth); if we want authorization for every route.

connectDB();

app.use(express.json());

app.get("/" , (req,res) =>{
    res.send("<h1>Currency Database</h1>")
});
app.use("/currency", currencyRouter);

app.use("/users", usersRouter)

app.use("/blogs", blogsRouter)


app.listen(PORT ,()=>{
    console.log(`Server running on ${PORT}`);
})