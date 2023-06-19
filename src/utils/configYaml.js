const fs = require("fs");

const YAML = require("yaml");
// const SwaggerParser = require("swagger-parser");

// const filePath = require("../../documentation/openapi.yaml")

// SwaggerParser.validate(filePath)
//   .then(api => {
//     console.log("Archivo Yaml valido")
//   })
//   .catch(err => {
//     console.log(err.message)
//   })

const file = () => {
  fs.readFileSync("documentation/openapi.yaml", "utf-8");
};
console.log(file(), 'archivo con ruta')
const openapiDocument = YAML.parse(file);
console.log('archivo config yaml', openapiDocument)



module.exports = openapiDocument;

// TODO: valida archivo YAML
//TODO: probar file que no sea funcion
//Ahora usando este metodo obtengo: undefined archivo con ruta
// archivo config yaml null
// null