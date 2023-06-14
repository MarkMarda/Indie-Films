const { request } = require("express");
const Classification = require("../models/classifications.models");



const createClassifications = async(name) => {

  const {} = req.body;
  
  const createClassifications = await Classification.create()
  
};

const prueba = async() => {
  // request("https://film-directors.onrender.com/api/v1/directors")
  await req.get("https://film-directors.onrender.com/api/v1/directors")
}
console.log(prueba())
const updateClassifications = async() => {};

const deleteClassifications = async() => {};


module.exports = {

};