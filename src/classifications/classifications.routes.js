const router = require("express").Router();

const classificationsServices = require("./classifications.services");



router.route("/")
  .get(classificationsServices.getAllClassifications)
  .post(classificationsServices.postClassification);

router.route("/:id")
  .get(classificationsServices.getClassificationById)
  .put(classificationsServices.putClassification)
  .delete(classificationsServices.deleteClassification);


module.exports = router;


