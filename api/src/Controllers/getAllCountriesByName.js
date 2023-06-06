const { Country } = require("../db");
const { Op } = require("sequelize")

const getAllCountriesByName = async (req, res) => {
  try {
    const { name } = req.query;
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    if(countries && countries.length > 0){
        return res.status(200).json(countries)
    } else{
        return res.status(404).json("No countries found by those requirements")
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllCountriesByName