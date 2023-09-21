const { request } = require("express");
const Classification = require("../models/classifications.models");



const createClassifications = async (name) => {

  const createClassifications = await Classification.create({
    name: name
  });

  return createClassifications
  
};

const findAllClassifications = async () => {

  const data = await Classification.find();

  return data;

};

const findAllClassificationById = async (id) => {
  
  const data = await Classification.findById(id);

  return data;

};

const updateClassifications = async (id, data) => {

  const classification = await Classification.findById(id);

  if (!classification) {
    throw new Error(`Classification with id: ${id} does not exist`);
  };
  
  //Copy the data and after is saved on classification
  Object.assign(classification, data);
  const dataModified = await classification.save();
  return dataModified;

};

const deleteClassifications = async (id) => {

  const data = await Classification.findByIdAndDelete(id);

  return data;

};


module.exports = {

  createClassifications,
  findAllClassifications,
  findAllClassificationById,
  updateClassifications, 
  deleteClassifications
  
};