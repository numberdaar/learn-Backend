const {getQueryErrors} = require("../validators/user.validators")
const userSearchValitor=(req,res,next)=>{
    const{gender,age} = req.query;
    const {error}  = getQueryErrors(
        {gender ,age: age & Number(age),}
    );
    if(error) 
        return res.status(400).send({message :error.details[0].message});
    next();
};

module.exports = userSearchValitor;
