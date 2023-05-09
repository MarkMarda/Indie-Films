const expres = require("express");

const config = require("./config");
const dataBase = require("./utils/database");


const app = expres();

app.use(expres.json());

//Here DB is connected
dataBase()

app.get("/", (req, res) => {

  res.status(200).json({
    message: "OK!",
    indieFilms: `localhost: ${config.port}/api/v1/indie-films`
  });

});

// mongoose.connection.once("open", () => {
//   console.log("connected to dataBase")
// })

const server = app.listen(config.port, () => {

  console.log(`Server started at ${config.port}`);

});



