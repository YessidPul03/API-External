const express = require("express");
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const dbConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "apimasalcance",
};

//Middleware para permitir CORS (si es necesario)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// app.use((req, res, next) => {
//   console.log(`Solicitud ${req.method} a ${req.url}`);
//   next();
// });

app.use(bodyParser.json());
// Ruta de ejemplo para insertar datos en la base de datos
app.post("/insertedata", async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);

    // Obtener datos del cuerpo de la solicitud (requiere body-parser o express.json())
    const { id_usuario, tipo_metodo, datos } = req.body;
    // Ejecutar consulta SQL para insertar datos
    await connection.execute(
      "INSERT INTO registro_consultas (id_usuario, tipo_metodo, datos) VALUES (?, ?, ?)",
      [id_usuario, tipo_metodo, datos]
    );
    await connection.end();
    res.status(200).send("Datos insertados correctamente");
  } catch (error) {
    console.error("Error al insertar datos:", error);
    res.status(500).send("Error al insertar datos");
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log("ES CORRECTO");
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});
