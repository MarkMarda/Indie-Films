const mongoose = require("mongoose");

//plugin which adds pre-save validation for unique fields within a Mongoose schema.
const uniqueValidator = require("mongoose-unique-validator");



const filmSchema = new mongoose.Schema({

  originalTitle:{
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  englishTitle: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  image: {
    type: String,
  },
  director: [{
    type: String,
    required: true,
    lowercase: true,
    trim: true
  }], /*puede ser llamado de FilmDirectors*/
  country: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
    required: true
  }],
  year: {
    type: Number,
    required: true
  },
  synopsis: {
    type: String,
    lowercase: true,
    trim: true
  },
  classification: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classification",
    required: true
  },
  genre: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre',
    required: true
  }],
  duration: {
    type: Number,
    required: true
  },
  festivals: [{
    type: String,
    lowercase: true,
    trim: true
  }],
  awards: [{
    type: String,
    lowercase: true,
    trim: true
  }],
  originalLanguage: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Language",
    required: true
  }],
  translationAudio: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Language"
  }],
  subtituleLanguages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Language",
    required: true
  }]

});

filmSchema.plugin(uniqueValidator);

const Film = mongoose.model("Film", filmSchema);


module.exports = Film;