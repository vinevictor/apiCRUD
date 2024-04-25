const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect((err) =>{
    if(err) throw err;
    console.log(`Conectado ao Banco de Dados ${process.env.DB_NAME}`)
});