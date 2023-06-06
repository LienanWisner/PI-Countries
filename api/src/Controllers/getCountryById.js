const {Country} = require("../db")
const {Activity} = require("../db")

const getCountryById = async(req,res) =>{
    try{
    const {idPais} = req.params
    const country = await Country.findByPk(idPais)
    const activities = await Activity.findAll({
        include:[
            {
                model: Country,
                where:  {id: idPais}
            }
        ]
    });

    const activitiesCountry = activities.map((activity)=>{
        return{
            name: activity.name,
            id: activity.id,
            difficulty: activity.difficulty,
            duration: activity.duration,
            season: activity.season
        }
    })

    const results = { ...country.dataValues, activitiesCountry}
    return res.status(200).json(results)
    } catch(error){
        return res.status(404).json({error: error.message})
    }
}

module.exports = getCountryById