const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");



const genresSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }

});

genresSchema.plugin(uniqueValidator);

const Genre = mongoose.model("Genre", genresSchema);


module.exports = Genre;