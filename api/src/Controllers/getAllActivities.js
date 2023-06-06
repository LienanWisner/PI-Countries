const { Activity} = require("../db")

const getAllActivities = async (req, res)=>{
    try{
        const activities = await Activity.findAll()
        return res.status(200).json(activities)

    }
    catch(error){
        return res.status(404).json({error: error.message})
    }
}

module.exports = getAllActivities