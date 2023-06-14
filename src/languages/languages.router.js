const router = require("express").Router();

const languagesServices = require("./languages.services");



router.route("/")
  .get(languagesServices.getAllLanguages)
  .post(languagesServices.postLanguages);

router.route("/:id")
  .get()
  .patch()
  .put()
  .delete();


module.exports = router;