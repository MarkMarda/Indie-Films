const router = require("express").Router();

const countriesServices = require("./countries.services");



router.route("/")
  .get(countriesServices.getAllCountries)
  .post(countriesServices.postCountry);

router.route("/:id")
  .get(countriesServices.getAllCountryById)
  .put(countriesServices.putCountry)
  .delete(countriesServices.deleteCountry);


module.exports = router;


