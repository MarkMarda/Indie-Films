const Film = require("../models/films.models");



const createFilms = async (data) => {

  const createFilm = await Film.create({
    originalTitle: data.originalTitle,
    englishTitle: data.englishTitle,
    image: data.image,
    director: data.director,
    country: data.country,
    year: data.year,
    synopsis: data.synopsis,
    classification: data.classification,
    genre: data.genre,
    duration: data.duration,
    festivals: data.festivals,
    awards: data.awards,
    originalLanguage: data.originalLanguage,
    translationAudio: data.translationAudio,
    subtituleLanguages: data.subtituleLanguages 
  });

  return createFilm;

};

const findAllFilms = async () => {

  const data = await Film.find();

  return data;

};

const findFilmsById = async (id) => {

  const data = await Film.findById(id);

  return data;

};

const updateFilms = async (id, data) => {

  const film = await Film.findById(id);

  //Copy the data and after is saved on film
  Object.assign(film, data);
  const dataModified = await film.save();
  return dataModified;

};

const deleteFilms = async (id) => {

  const data = await Film.findByIdAndDelete(id);

  return data;

};


module.exports = {

  createFilms,
  findAllFilms,
  findFilmsById,
  updateFilms,
  deleteFilms
  
};