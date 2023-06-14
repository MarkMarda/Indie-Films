const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");



const classificationSchema = mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }

});

classificationSchema.plugin(uniqueValidator);

const Classification = mongoose.model("Classification", classificationSchema);


module.exports = Classification;