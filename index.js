const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

//Creamos el servidor
const app = express();
app.disable("x-powered-by"); //Solución

// Conectamos a la BD
conectarDB();

let corsOptions = {
    origin: 'https://mean-frontend.vercel.app/' 
  };
  
app.use(cors(corsOptions));


app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

app.listen(process.env.PORT || 3000, () =>{
    console.log('El servidor está corriendo perfectamente')
})