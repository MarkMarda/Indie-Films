const countriesControllers = require("./countries.controllers");



const postCountry = (req, res) => {

  const {name} = req.body;

  if (!name) {
    return res.status(404).json({
      message: "Invalid data",
      fields: {name: "String"}
    });
  };

  countriesControllers.createCountries(name)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
};

const getAllCountries = (req, res) => {
  
  countriesControllers.findAllCountries()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
};

const getAllCountryById = (req, res) => {

  const {id} = req.params;

  if (!id) {
    return res.status(404).json({message: `Country with Id: ${id} was not found`});
  };

  countriesControllers.findCountriesById(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
};

const putCountry = (req, res) => {

  const {id} = req.params;
  const {name} = req.body;

  if (!id) {
    return res.status(404).json({message: `Country with Id: ${id} was not found`});
  };

  if (!name) {
    return res.status(404).json({
      message: "Invalid data",
      fields: {name: "String"}
    });
  };

  countriesControllers.updateCountries(id, name)
    .then(data => {
      console.log(data)
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

};

const deleteCountry = (req, res) => {

  const {id} = req.params;

  if (!id) {
    return res.status(404).json({
      message: "Invalid Id",
      id
    });
  };

  countriesControllers.deleteCountries(id)
    .then(data => {
      res.status(204).json();
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

};


module.exports = {

  postCountry,
  getAllCountries,
  getAllCountryById,
  putCountry,
  deleteCountry
  
};