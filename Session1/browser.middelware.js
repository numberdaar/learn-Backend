const checks = (req,res,Next) =>{
    console.log("middelware")
    Next();
}
module.exports = checks