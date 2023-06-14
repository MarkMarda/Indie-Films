const mongoose = require("mongoose");

//plugin which adds pre-save validation for unique fields within a Mongoose schema.
const uniqueValidator = require("mongoose-unique-validator");



const filmSchema = new mongoose.Schema({

  originalTitle:{
    type: String,
    required: true,
  },
  englishTitle: {
    type: String,
    required: true,
  },
  image: {},
  director: {}, /*puede ser llamado de FilmDirectors*/
  country: {}, /*puede ser llamado de FilmDirectors*/
  year: {},
  synopsis: {},
  genre: [{
    type: String,
    required: true
  }],
  duration: {},
  festivals: [{
    type: String
  }],
  awards: [{
    type: String
  }],
  originalLanguage: {},
  translationAudio: [{}],
  subtituleLanguages: [{}]

});

filmSchema.plugin(uniqueValidator);

const Film = mongoose.model("Film", filmSchema);


module.exports = Film;