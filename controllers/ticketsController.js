const Tickets = require('../models/Tickets');

//agragar nuevo ticket
exports.nuevoTicket = async (req, res, next) => {
    const ticket = new Tickets(req.body);
    try {
        await ticket.save();
        res.json({ mensaje: 'Nuevo ticekt agregado' });
    } catch (error) {
        console.log(error);
        next();
    }

}

//mostrar todos los tikets
exports.mostrarTickets = async (req, res, next) => {
    try {
        const tickets = await Tickets.find({}).populate('cliente').populate({
            path: 'ticket.material',
            model: 'Materiales'
        });
        res.json(tickets)

    } catch (error) {
        console.log(error);
        next();
    }
}

//muestra un ticket por id
exports.mostrarTicket = async (req, res, next) => {
    const ticket = await Tickets.findById(req.params.idTicket).populate({
        path: 'ticket.material',
        model: 'Tickets'
    });
    if (!ticket) {
        res.json({ mensaje: 'No existe ticket' });
        return next();
    }
    res.json(ticket);

}

//actualizar ticket
exports.actualizarTicket = async (req, res, next) => {
    try {
        let ticket = await Tickets.findOneAndUpdate({ _id: req.params.idTicket }, req.body, {
            new: true
        });
        res.json(ticket);
    } catch (error) {
        console.log(error);
        next();

    }
}

//eliminar ticket
exports.eliminarTicket = async (req, res, next) => {
    try {
        const ticket = await Tickets.findOneAndDelete({ _id: req.params.idTicket });
        res.json({ mensaje: 'Ticket eliminado' })
    } catch (error) {
        console.log(error);
        next(); 
    }

}