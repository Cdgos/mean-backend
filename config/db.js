const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    try{

        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

    }catch(error){
        throw new Error("Algo ha pasado: " + error);
    }
}

module.exports = conectarDB;