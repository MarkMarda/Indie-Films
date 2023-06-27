const router = require("express").Router();

const genresServices = require("./genres.services");



router.route("/")
  .get(genresServices.getAllGenres)
  .post(genresServices.postGenre);

router.route("/:id")
  .get(genresServices.getGenreById)
  .put(genresServices.putGenre)
  .delete(genresServices.deleteGenre);

module.exports = router;