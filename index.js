const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

//Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(process.env.PORT || 3000, () =>{
    console.log('El servidor está corriendo perfectamente')
})