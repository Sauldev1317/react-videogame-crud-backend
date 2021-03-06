const mysql = require("mysql");
const dbConfig = require("../config/config.database");

// Creas una conexion a la base de datos 
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USERNAME,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE
});

// Abres la conexion a la base de datos
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;