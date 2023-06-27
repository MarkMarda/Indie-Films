const genresControllers = require("./genres.controllers");



const postGenre = (req, res) => {

  const {name} = req.body;

  if (!name) {
    return res.status(404).json({
      message: "Invalid data",
      fields: {name: "String"}
    });
  };

  genresControllers.createGenres(name)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

};

const getAllGenres = (req, res) => {

  genresControllers.findAllGenres()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

};

const getGenreById = (req, res) => {

  const {id} = req.params;

  if (!id) {
    return res.status(404).json({message: `Genre with Id: ${id} was not found`});
  };

  genresControllers.findGenresById(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
};

const putGenre = (req, res) => {

  const {id} = req.params;
  const {name} = req.body;

  if (!id) {
    return res.status(404).json({message: `Genre with Id: ${id} was not found`});
  };

  if (!name) {
    return res.status(404).json({
      message: "Invalid data",
      fields: {name: "String"}
    });
  };

  genresControllers.updateGenres(id, name)
    .then(data => {
      console.log(data)
      res.status(200).json(data); //TODO: See data[0]
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
};

const deleteGenre = (req, res) => {

  const {id} = req.params;

  if (!id) {
    return res.status(404).json({
      message: "Invalid Id",
      id
    });
  };

  genresControllers.deleteGenres(id)
    .then(data => {
      res.status(204).json();
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
};


module.exports = {

  postGenre,
  getAllGenres,
  getGenreById,
  putGenre,
  deleteGenre

};