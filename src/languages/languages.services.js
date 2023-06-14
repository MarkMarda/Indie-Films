const languagesControllers = require("./languages.controllers");



const getAllLanguages = (req, res) => {

  languagesControllers.findAllLanguages()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

};

const postLanguages = (req, res) => {

  const {name} = req.body;

  if(name) {
    languagesControllers.createLanguages(name)
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        res.status(400).json({message: err.message});
      });
  } else {
    res.status(400).json({
      message: "Invalid data",
      fields: {name: "string"}
    });
  };

};


module.exports = {

  getAllLanguages,
  postLanguages
};