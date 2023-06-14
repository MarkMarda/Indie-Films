const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");



const languageSchema = mongoose.Schema ({

  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }

});

languageSchema.plugin(uniqueValidator);

const Language = mongoose.model("Language", languageSchema);


module.exports = Language;


