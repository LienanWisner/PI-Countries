const {Activity} = require("../db")

const deleteActivity = async(req,res)=>{
    try{
        const {idAct} = req.params
        await Activity.destroy({
            where:{
                id: idAct
            }
        })
        const results = await Activity.findOne()
        return res.status(200).json(results)
    } catch(error){
        return res.status(400).json({error: error.message})
    }
}

module.exports = deleteActivity