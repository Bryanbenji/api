const mongoose = require('mongoose');
const Materiales = require('./Materiales');
const Schema = mongoose.Schema;

const ticketsSchema = new Schema({
    cliente: {
        type: Schema.ObjectId,
        ref: 'Clientes'
    },
    ticket: [{
        descripcion: {
            type: String
        },
        fecha: {
            type: Date
        },
        material:{
            type: Schema.ObjectId,
            ref: 'Materiales'
        },
        cantidad: Number,
        //agregar el tecnico asignado posteriromente
    }],
    
});

module.exports = mongoose.model('Tickets', ticketsSchema);