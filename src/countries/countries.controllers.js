const Country = require("../models/countries.models");



const createCountries = async (name) => {

  const createCountry = await Country.create({
    name: name
  });

  return createCountry;

};

const findAllCountries = async () => {

  const data = await Country.find();

  return data;

};

const findCountriesById = async (id) => {

  const data = await Country.findById(id);

  return data;

};

const updateCountries = async (id, data) => {

  const country = await Country.findById(id);

  //Copy the data and after is saved on country
  Object.assign(country, data);
  const dataModified = await country.save();
  return dataModified;

};

const deleteCountries = async (id) => {

  const data = Country.findByIdAndDelete(id);

  return data;

};


module.exports = {

  createCountries,
  findAllCountries,
  findCountriesById,
  updateCountries,
  deleteCountries

};
