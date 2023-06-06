const { Router } = require('express');

const getAllCountries = require("../Controllers/getAllCountries")
const getCountryById = require("../Controllers/getCountryById")
const getAllCountriesByName = require("../Controllers/getAllCountriesByName")
const postActivity = require("../Controllers/postActivity")
const getAllActivities = require("../Controllers/getAllActivities")
const deleteActivity = require("../Controllers/deleteActivity")
const createCountry = require("../Controllers/createCountry")

const router = Router();


router.post("/countries" , createCountry)

router.get("/countries/name", getAllCountriesByName);

router.get("/countries/:idPais", getCountryById);

router.get("/countries", getAllCountries);

router.delete("/activities/:idAct", deleteActivity)

router.post("/activities", postActivity)

router.get("/activities", getAllActivities)



module.exports = router;
