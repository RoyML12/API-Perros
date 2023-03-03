const mongoose = require("mongoose");

const registroSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },

    edad: {
        type: Number,
        required: true
    },

    fechaNacimiento:{
        type: String,
        required: true
    },

    raza:{
        type: String,
        required: true
    },

    telefono:{
        type: Number,
        required: true
    }


});

module.exports = mongoose.model('Registro', registroSchema);