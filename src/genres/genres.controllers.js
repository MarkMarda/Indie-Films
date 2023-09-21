const Genre = require("../models/genres.models");



const createGenres = async (name) => {

  const createGenre = await Genre.create({
    name: name
  });

  return createGenre;

};

const findAllGenres = async () => {

  const data = await Genre.find();

  return data;

};

const findGenresById = async (id) => {

  const data = await Genre.findById(id);

  return data; 

};

const updateGenres = async (id, data) => {

  const genre = await Genre.findById(id);

  //Copy the data and after is saved on genre
  Object.assign(genre, data);
  const dataModified = await genre.save();
  return dataModified;

};

const deleteGenres = async (id) => {

  const data = await Genre.findByIdAndDelete(id);

  return data;

};


module.exports = {

  createGenres,
  findAllGenres,
  findGenresById,
  updateGenres,
  deleteGenres
  
};