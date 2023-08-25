const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const fileUpload = require("express-fileupload");

const config = require("./config");
const dataBase = require("./utils/database");
// const openapiDocument = require("./utils/configYaml");
// console.log(openapiDocument)
const filmsRoutes = require("./films/films.routes");
const languagesRoutes = require("./languages/languages.routes");
const classificationsRoutes = require("./classifications/classifications.routes");
const genresRoutes = require("./genres/genres.routes");
const countriesRoutes = require("./countries/countries.routes");

const documentation = YAML.load("documentation/openapi.yaml");



const app = express();

app.use(express.json());

//Fileupload middleware
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/",
  createParentPath: true
}));

//Here DB is connected
dataBase();

app.get("/", (req, res) => {

  res.status(200).json({
    message: "OK!",
    indieFilms: `localhost: ${config.port}/api/v1/indie-films`
  });

});

app.use("/api/v1/indie-films/films", filmsRoutes)
app.use("/api/v1/indie-films/languages", languagesRoutes)
app.use("/api/v1/indie-films/classifications", classificationsRoutes)
app.use("/api/v1/indie-films/genres", genresRoutes)
app.use("/api/v1/indie-films/countries", countriesRoutes)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(documentation))
// mongoose.connection.once("open", () => {
//   console.log("connected to dataBase")
// })

const server = app.listen(config.port, () => {

  console.log(`Server started at ${config.port}`);

});



