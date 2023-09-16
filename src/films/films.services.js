const cloudinary = require("cloudinary").v2

const filmsControllers = require("./films.controllers");
const config = require("../config");

cloudinary.config({cloudinary: config.cloudinary});



const postFilm = async (req, res) => {

  const {
    originalTitle,
    englishTitle,
    image,
    director,
    country,
    year,
    synopsis,
    classification,
    genre,
    duration,
    festivals,
    awards,
    originalLanguage,
    translationAudio,
    subtituleLanguages 
  } = req.body;

  if (
    !originalTitle 
    || !englishTitle 
    || !director 
    || !country 
    || !year 
    || !classification 
    || !genre 
    || !duration 
    || !originalLanguage 
    || !subtituleLanguages
  ) {
    return res.status(404).json({
      message: "Invalid data",
      requiredFields: {
        originalTitle: "String",
        englishTitle: "String",
        director: "String",
        country: "String",
        year: "Number",
        classification: "String",
        genre: "String",
        duration: "Number",
        originalLanguage: "String",
        subtituleLanguages: "String"
      },
      optionalFields: {
        image: "String",
        synopsis: "String",
        festivals: "String",
        awards: "String",
        translationAudio: "String"
      }
    });
  };

  //Case: user wants post with a image file
  //? to resolve TypeError: Cannot read properties of null (reading "image")
  if (req.files || req.files?.image) {
    const imageFile = req.files.image;

    const fileTypes = ["image/jpg", "image/png", "image/jpeg"];
    const fileExtensions = ["jpg", "png", "jpeg"];
    const fileSize = 10000000;

    if (!fileTypes.includes(imageFile.mimetype)) {
      return res.status(400).json({message: "File types: png, jpeg and jpg"});
    }
  
    if (!fileExtensions.includes(imageFile.name.split(".")[1])) {
      return res.status(400).json({message: "File extensions: png, jpeg and jpg"});
    }
  
    if (imageFile.size > fileSize) {
      return res.status(400).json({message: "File size: 10Mb"});
    }

    const uploadedImage = await cloudinary.uploader.upload(
      imageFile.tempFilePath,
      {
        folder: "Indie-Films/films",
        use_filename: true,
        unique_filename: false
      }
    );

    let imageUrl = uploadedImage.secure_url;

    return filmsControllers.createFilms({
      originalTitle,
      englishTitle,
      image: imageUrl,
      director,
      country,
      year,
      synopsis,
      classification,
      genre,
      duration,
      festivals,
      awards,
      originalLanguage,
      translationAudio,
      subtituleLanguages 
    })
      .then(data => {
        res.status(201).json(data);
      })
      .catch(err => {
        res.status(400).json({message: err.message});
      });
  };

  filmsControllers.createFilms({
    originalTitle,
    englishTitle,
    image,
    director,
    country,
    year,
    synopsis,
    classification,
    genre,
    duration,
    festivals,
    awards,
    originalLanguage,
    translationAudio,
    subtituleLanguages 
  })
    .then(data => {
      res.status(201).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
};

const getAllFilms = (req, res) => {

  filmsControllers.findAllFilms()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
};

const getFilmById = (req, res) => {

  const {id} = req.params;

  if (!id) {
    return res.status(404).json({message: `Film with Id: ${id} was not found.`});
  };

  filmsControllers.findFilmsById(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
};

const putFilm = (req, res) => {

  const {id} = req.params;
  const {
    originalTitle, 
    englishTitle, 
    director, 
    country, 
    year, 
    classification, 
    genre, 
    duration, 
    originalLanguage, 
    subtituleLanguages,
    image,
    ...rest
  } = req.body;

  if (!id) {
    return res.status(404).json({message: `Film with Id: ${id} was not found.`});
  };

  if (!originalTitle || !englishTitle || !director || !country || !year || !classification || !genre || !duration || !originalLanguage || !subtituleLanguages || !rest.synopsis || !rest.festivals || !rest.awards || !rest.translationAudio) {
    return res.status(404).json({
      message: "Invalid data",
      requiredFields: {
        originalTitle: "String",
        englishTitle: "String",
        director: "String",
        country: "String",
        year: "Number",
        synopsis: "String",
        classification: "String",
        genre: "String",
        duration: "Number",
        festivals: "String",
        awards: "String",
        originalLanguage: "String",
        translationAudio: "String",
        subtituleLanguages: "String"
      }
    });
  };

  if (image) {
    return res.status(400).json({message: "Image can not be edited"})
  }

  const data = {}; 
  if (originalTitle) data.originalTitle = originalTitle;
  if (englishTitle) data.englishTitle = englishTitle;
  if (director) data.director = director;
  if (country) data.country = country;
  if (year) data.year = year;
  if (classification) data.classification = classification;
  if (genre) data.genre = genre;
  if (duration) data.duration = duration;
  if (originalLanguage) data.originalLanguage = originalLanguage;
  if (subtituleLanguages) data.subtituleLanguages = subtituleLanguages;

  filmsControllers.updateFilms(id, data)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

  //NOTAS:
  //1- Probar si los if funcionan
  //2- Equiparar la funcion con la de patchFilm

};

const patchFilm = async (req, res) => {

  const {id} = req.params;

  const {...rest} = req.body;

  if (!id) {
    return res.status(404).json({message: `Film with Id: ${id} was not found.`});
  };

  //? to resolve TypeError: Cannot read properties of null (reading "image")
  if (req.files || req.files?.image) {
    return res.status(400).json({message: "Image can not be edited"});
  };

  filmsControllers.updateFilms(id, {...rest})
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
  //TODO: probar dentro del req.files editar imagen
};

const putImageFilm = async (req, res) => {

  const {id} = req.params;

  const imageFile = req.files.image;
  
  //TODO:validar extensiones de archivos
  const fileTypes = ["image/jpg", "image/png", "image/jpeg"];
  const fileExtensions = ["jpg", "png", "jpeg"];
  const fileSize = 10000000;
  
  if (!id) {
    return res.status(404).json({message: `Film with Id: ${id} was not found.`});
  };

  if (!req.files || !req.files.image) {
    return res.status(400).json({message: "File was not provided."})
  }

  if (!fileTypes.includes(imageFile.mimetype)) {
    return res.status(400).json({message: "File types: png, jpeg and jpg"});
  }

  if (!fileExtensions.includes(imageFile.name.split(".")[1])) {
    return res.status(400).json({message: "File extensions: png, jpeg and jpg"});
  }

  if (imageFile.size > fileSize) {
    return res.status(400).json({message: "File size: 10Mb"});
  }

  const uploadedImage = await cloudinary.uploader.upload(
    imageFile.tempFilePath,
    {
      folder: "Indie-Films/films",
      use_filename: true,
      unique_filename: false
    }
  );

  let imageUrl = uploadedImage.secure_url;
  
  filmsControllers.updateFilms(id, {image: imageUrl})
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });
  
    //TODO: corregir cuando se le envia un campo como "duration"
    //no lo edita pero no da mensaje de error o aglo similar.
    //cuando no se manda archivo y se manda otro campo da error
};

const deleteFilm = (req, res) => {

  const {id} = req.params;

  if (!id) {
    return res.status(404).json({
      message: "Invalid Id.",
      id
    });
  };

  filmsControllers.deleteFilms(id)
    .then(data => {
      res.status(204).json();
    })
    .catch(err => {
      res.status(400).json({message: err.message});
    });

};


module.exports = {

  postFilm,
  getAllFilms,
  getFilmById,
  putFilm,
  patchFilm,
  putImageFilm,
  deleteFilm
  
};

/*TODO: 
1- Cambiar los codigos http del post, Me parece no es 404
2- Revisar el put
3- Como le hago si deseo evitar que no se inserte un dato que no pido
    en el put o patch? Porque se puede en el Patch si no pongo esa
    restriccion
4- Falta imagen del post por si se desea publicar
5- Agregar a languages una opcion de Ninguno por si es el caso
6- Probar si los IF CON EL DATA funcion en el PUT
7- Validar EXTENCIONES DE IMAGENES en putImage y Post,
*/