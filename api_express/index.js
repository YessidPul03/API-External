const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use(bodyParser.json());

const PUERTO = 3000;

const connection = mysql.createConnection({
  host: "localhost",
  database: "apimasalcance",
  user: "root",
  password: "",
});

app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en el puerto: ${PUERTO}`);
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Conexion exitosa a la base de datos");
});

app.get("/", (req, res) => {
  res.send("API");
});

//Petición para insertar las peticiones a la base de datos
app.post("/peticiones/insertar", (req, res) => {
  const peticion = {
    id_usuario: req.body.id_usuario,
    tipo_metodo: req.body.tipo_metodo,
    data: req.body.data,
  };

  const query = `INSERT INTO registro_consultas SET ?`;
  connection.query(query, peticion, (error, resultado) => {
    if (error) return console.error(error.message);

    res.json("Se insertó correctamente la petición");
  });
});

//Petición para listar la información de la Base de Datos
// app.get("/listar-peticiones", (req, res) => {
//   const query = `SELECT * FROM registro_consultas`;
//   connection.query(query, (error, resultado) => {
//     if (error) return console.error(error.message);

//     if (resultado > 0) {
//       res.json(resultado);
//     } else {
//       res.json("No hay registros");
//     }
//   });
// });
