const languagesControllers = require("./languages.controllers");



const postLanguage = (req, res) => {

  const {name} = req.body;

  if (!name) {
    return res.status(404).json({
      message: "Invalid data",
      fields: {name: "String"}
    });
  };

  languagesControllers.createLanguages(name)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
 
};

const getAllLanguages = (req, res) => {

  languagesControllers.findAllLanguages()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

};

const getLanguageById = (req, res) => {

  const {id} = req.params;
  
  if (!id) {
    return res.status(404).json({message: `Language with Id: ${id} was not found.`});
  };

  languagesControllers.findLanguageById(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

};

const putLanguage = (req, res) => {

  const {id} = req.params;
  const {name} = req.body;

  if (!id) {
    return res.status(404).json({message: `Language with Id: ${id} was not found.`});
  };
  
  if (!name) {
    return res.status(404).json({
      message: "Invalid data",
      fields: {name: "String"}
    });
  };

  languagesControllers.updateLanguages(id, name)
    .then(data => {
      res.status(200).json(data); //TODO: See data[0]
    })
    .data(err => {
      res.status(400).json({message: err.message});
    });

};

const deleteLanguage = (req, res) => {

  const {id} = req.params;

  if (!id) {
    return res.status(404).json({
      message: "Invalid Id",
      id
    });
  };

  languagesControllers.deleteLanguages(id)
    .then(data => {
      res.status(204).json();
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
};


module.exports = {

  postLanguage,
  getAllLanguages,
  getLanguageById,
  putLanguage,
  deleteLanguage

};