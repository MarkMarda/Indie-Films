const mongoose = require("mongoose");

//plugin which adds pre-save validation for unique fields within a Mongoose schema.
const uniqueValidator = require("mongoose-unique-validator");



const countrySchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  }
  
});

countrySchema.plugin(uniqueValidator);

const Country = mongoose.model("Country", countrySchema);


module.exports = Country;