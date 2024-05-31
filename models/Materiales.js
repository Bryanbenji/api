const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materialesSchema = new Schema({
    nombre: { 
        type: String, 
        trim: true 
    },
    descripcion: {
        type: String,
    },
    cantidad: {
        type: Number
    }
});

module.exports = mongoose.model('Materiales', materialesSchema)