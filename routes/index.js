const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const materialesController = require('../controllers/materialesController');
const ticketsController = require('../controllers/ticketsController');




module.exports = function(){

    //**CLIENTES*/
    //agrega nuevos clientes POST
    router.post('/clientes', clienteController.nuevoCliente);
    //obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes);
    //muestra cliente especifico
    router.get('/clientes/:idCliente', clienteController.mostrarCliente);
    //actualiza cliente por id
    router.put('/clientes/:idCliente', clienteController.actualizaCliente);
    //eliminar cliente por id
    router.delete('/clientes/:idCliente', clienteController.eliminarCliente);


    //**MATERIALES*/
    //nuevos materiales
    router.post('/materiales', materialesController.nuevoMaterial);
    //muestra todos los materiales 
    router.get('/materiales', materialesController.mostrarMateriales);
    //muestra un material por ID
    router.get('/materiales/:idMaterial', materialesController.mostrarMaterial);
    //actualizar materiales
    router.put('/materiales/:idMaterial', materialesController.actualizarMaterial);
    //elimina materiales
    router.delete('/materiales/:idMaterial', materialesController.eliminarMaterial);

    //** TICKETS */
    //crear nuevo ticket
    router.post('/tickets', ticketsController.nuevoTicket);
    //muestra todos los tockets
    router.get('/tickets', ticketsController.mostrarTickets);
    //mostrar un ticet por id
    router.get('/tickets/:idTicket', ticketsController.mostrarTicket);
    //actualizar ticket por id
    router.put('/tickets/:idTicket', ticketsController.actualizarTicket);
    //eliminar ticket
    router.delete('/tickets/:idTicket', ticketsController.eliminarTicket);




    return router;
}