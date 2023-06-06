const { Activity } = require("../db");
const { Country } = require("../db");

const postActivity = async (req, res) => {
  const { name, difficulty, duration, season, countryName } = req.body;
  try {
    if (!name || !difficulty || !duration || !season || !countryName) {
      throw Error("Missing one or more properties");
    } else {
      const [activity, boolean] = await Activity.findOrCreate({
        where: {
          name,
        },
        defaults: {
          name,
          difficulty,
          duration,
          season,
        },
      });
      if (activity) {
        const countryFound = await Country.findAll({
          where: {
            name: countryName,
          },
        });
        await activity.addCountry(countryFound);
      }
      const results = await Activity.findAll();
      return boolean
        ? res.status(201).json(results)
        : res.status(400).json({message: "Activity already exists." });
    }
  } catch (error) {
    return res.status(400).json({error: error.message}) 
  }
};

module.exports = postActivity