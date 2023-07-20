const Language = require("../models/languages.models");



const createLanguages = async (name) => {

  const createData = await Language.create({
    name: name
  })

  return createData.save();

};

const findAllLanguages = async () => {

  const data = await Language.find();

  return data;

};

const findLanguageById = async (id) => {

  const data = await Language.findById(id)

  return data;

};

const updateLanguages = async (id, data) => {

  const language = await Language.findById(id);

  //Copy the data and after is saved on language
  Object.assign(language, data);
  const dataModified = await language.save();
  return dataModified;

};

const deleteLanguages = async (id) => {

  const data = await Language.findByIdAndDelete(id);

  return data;

};


module.exports = {
  
  findAllLanguages,
  createLanguages,
  findLanguageById,
  updateLanguages,
  deleteLanguages

};