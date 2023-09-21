const router = require("express").Router();

const languagesServices = require("./languages.services");



router.route("/")
  .get(languagesServices.getAllLanguages)
  .post(languagesServices.postLanguage);

router.route("/:id")
  .get(languagesServices.getLanguageById)
  .put(languagesServices.putLanguage)
  .delete(languagesServices.deleteLanguage);


module.exports = router;