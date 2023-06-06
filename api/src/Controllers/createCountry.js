const {Country} = require("../db");

const createCountry = async (req, res) =>{
    const {name, id, image, continent, capital, subregion, area, population} = req.body;

    try{
        if(!name || !id || !image || !continent || !capital || !subregion || !area || !population){
            throw Error("Missing one or more properties")
        } else {
            const country = await Country.create({
                    name, 
                    id,
                    image,
                    continent,
                    capital,
                    subregion,
                    area,
                    population
            }) 
            // const results = await Country.findAll()
            return  res.status(201).json(country) 
            // res.status(400).json({message: "Country already exists"})

            
    }
} catch ( error){
    return res.status(400).json({error: error.message})
}
}

module.exports = createCountry