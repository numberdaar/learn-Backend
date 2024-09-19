const axios = require("axios")
// const users = require("../users.json");
const {getQueryErrors} = require("../validators/user.validators")
const apidownload= async() => 
    (await axios.get("https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json")).data;

const getUsers =  async(req,res) =>{
    if(req.headers.authorization !== process.env.apiKey) return res.sendStatus(401);
    try{
        const response = await apidownload();
        res.send(response.data);
    }catch(error){
        res.status(500).send({message:"Something went wrong,try again!"});
    }
}

const getUsersbyId=async(req,res) =>{
    const {uuid} = req.params;
    // console.log(req.params.symboltype);
        const response = await apidownload();
        const requser= response.data.find((user) => user.login.uuid === uuid );
        if(requser) return res.send(requser);
        res.status(404).send({message:`user with uuid : ${uuid} could not be found`});
    }; 

const getUserbyGenderorAge =  async(req,res) =>{
   const{gender,age} = req.query;
   
   const response = await apidownload();
   const {error}  = getQueryErrors({gender ,age: age & Number(age),});
   if(error) return res.status(400).send({message :error.details[0].message});

//    if((age & isNaN(age)) || age<0 || age>100 )
//     return res
//         .status(400)
//         .send({message :"Age must be a number between 0 to 100"});
//     if(gender && !validGenders.includes(gender) )
//      return res
//         .status(400)
//         .send({message :"Gender must be male or female"});
   if (gender&age)
    return res.send(response.data.filter((user)=>user.gender === gender && user.dob.age === Number(age)))
   else if (gender)
    return res.send(response.data.filter((user)=>user.gender === gender))
   else if (age)
    return res.send(response.data.filter((user)=>user.dob.age === Number(age)))
   else res.status(422).send({message:"Atleast one of gender or age must be sent"})
};

module.exports={getUsers,getUsersbyId,getUserbyGenderorAge} ;