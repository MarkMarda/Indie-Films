const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const config = require("./config");
const dataBase = require("./utils/database");
// const openapiDocument = require("./utils/configYaml");
// console.log(openapiDocument)
const languagesRouter = require("./languages/languages.router");

const documentation = YAML.load("documentation/openapi.yaml");



const app = express();

app.use(express.json());

//Here DB is connected
dataBase();

app.get("/", (req, res) => {

  res.status(200).json({
    message: "OK!",
    indieFilms: `localhost: ${config.port}/api/v1/indie-films`
  });

});

app.use("/api/v1/languages", languagesRouter)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(documentation))
// mongoose.connection.once("open", () => {
//   console.log("connected to dataBase")
// })

const server = app.listen(config.port, () => {

  console.log(`Server started at ${config.port}`);

});



