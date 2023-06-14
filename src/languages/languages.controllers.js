const Language = require("../models/languages.models");



const findAllLanguages = async() => {

  const data = await Language.find();

  return data;

};

const findLanguageById = async(id) => {

  const data = await Language.findById(id)

  return data;

};

const createLanguages = async(name) => {

  const createData = await Language.create({
    name: name
  })

  return createData.save();

};

const updateLanguages = async() => {

};

const deleteLanguages = async() => {

};


module.exports = {
  
  findAllLanguages,
  createLanguages

};