const axios = require("axios")
// const curriencies = require("../curriencies.json");

const getCurrencies =  async(req,res) =>{
    // console.log(req.query);
    const {min_value} = req.query;
    try{
        const response = (await axios.get("https://api.coinbase.com/v2/currencies")).data;
        if(min_value)
            return res.send(response.data.filter((curr)=>curr.min_size === min_value));
        res.send(response.data);
    }catch(error){
        res.status(500).send({message:"Something went wrong,try again!"});
    }
}

const getCurrenciesbysymbol=async(req,res) =>{
    // console.log(req.params.symboltype);
    try{
        const response = (await axios.get("https://api.coinbase.com/v2/currencies")).data;
        const reqcurr= response.data.find((curr) => 
            curr.id.toLowerCase() === req.params.symboltype.toLowerCase()
    );
        if(reqcurr) return res.send(reqcurr);
        res.status(404).send({message:"Currency could not be found "})
    }catch(error){
        res.status(500).send({message:"Something went wrong,try again!"});
    }
}

module.exports={getCurrencies,getCurrenciesbysymbol} ;