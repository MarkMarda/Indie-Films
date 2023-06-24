const classificationsControllers = require("./classifications.controllers");



const postClassification = (req, res) => {

  const {name} = req.body;

  if (!name) {
    return res.status(404).json({
      message: "Invalid data",
      fields: {name: "String"}
    });
  };

  classificationsControllers.createClassifications(name)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
};

const getAllClassifications = (req, res) => {

  classificationsControllers.findAllClassifications()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
};

const getClassificationById = (req, res) => {

  const {id} = req.params;

  if (!id) {
    return res.status(404).json({message: `Classification with Id: ${id} was not found`});
  };

  classificationsControllers.findAllClassificationById(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
};

const putClassification = (req, res) => {
  
  const {id} = req.params;
  const {name} = req.body;

  if (!id) {
    return res.status(404).json({message: `Classification with Id: ${id} was not found`});
  };

  if (!name) {
    return res.status(404).json({
      message: "Invalid data",
      fields: {name: "String"}
    });
  }

  classificationsControllers.updateClassifications(id, name)
    .then(data => {
      console.log(data)
      res.status(200).json(data); //TODO: See data[0]
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
};

const deleteClassification = (req, res) => {

  const {id} = req.params;

  if (!id) {
    return res.status(404).json({
      message: "Invalid Id",
      id
    });
  };

  classificationsControllers.deleteClassifications(id)
    .then(data => {
      res.status(204).json();
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
};

module.exports = {

  postClassification,
  getAllClassifications,
  getClassificationById,
  putClassification,
  deleteClassification

};