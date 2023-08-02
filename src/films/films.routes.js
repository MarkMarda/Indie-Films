const router = require("express").Router();

const filmsServices = require("./films.services");



router.route("/")
  .get(filmsServices.getAllFilms)
  .post(filmsServices.postFilm);

router.route("/:id")
  .get(filmsServices.getFilmById)
  .put(filmsServices.putFilm)
  .patch(filmsServices.patchFilm)
  .delete(filmsServices.deleteFilm);

router.route("/image/:id")
  .put(filmsServices.putImageFilm);

module.exports = router;

