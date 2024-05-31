const { request } = require('express');
const Clientes = require('../models/Clientes');

//agrega un nuevo cliente
exports.nuevoCliente = async (req, res) => {
    const cliente = new Clientes(req.body);
    try {
        //almacenar el registro
        await cliente.save();
        res.json({ mensaje: 'Se agregó un nuevo cliente' })

    } catch (error) {
        console.log(error);
        next();

    }
}

//muestra los clientes
exports.mostrarClientes = async (req, res, next) => {
    const cliente = new Clientes(req.body);
    try {
        //almacenar el registro
        const clientes = await Clientes.find({});
        res.json(clientes);

    } catch (error) {
        console.log(error);
        next();

    }
}

//muestra cliente por id
exports.mostrarCliente = async (req, res, next) => {
    const cliente = await Clientes.findById(req.params.idCliente);
    if (!cliente) {
        res.json({ mensaje: 'No existe el cliente' });
        next();
    }
    //muestra el cliente
    res.json(cliente);
}

//actualizar cliente por su id
exports.actualizaCliente = async (req, res, next) => {
    try {
        const cliente = await Clientes.findByIdAndUpdate({ _id: req.params.idCliente },
            req.body, {
            new: true
        });
        res.json(cliente);
    } catch (error) {
        console.log(error)
        next();
    }
}

//eliminar cliente por id
exports.eliminarCliente = async (req, res, next) => {
    try {
        const cliente = await Clientes.findOneAndDelete({ _id: req.params.idCliente });
        res.json({ mensaje: 'Cliente eliminado' })
    } catch (error) {
        console.log(error);
        next();
    }

}
