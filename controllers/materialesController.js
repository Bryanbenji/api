const Materiales = require('../models/Materiales');

//agreaga nuevos materiales
exports.nuevoMaterial = async (req, res, next) => {
    const material = new Materiales(req.body);
    try {
        await material.save();
        res.json({ mensaje: 'Se agregó  el material correctamente' });
    } catch (error) {
        console.log(error);
        next();
    }
}

//muestra todos los materiales
exports.mostrarMateriales = async (req, res, next) => {
    try {
        const materiales = await Materiales.find({});
        res.json(materiales);
    } catch (error) {
        console.log(error);
        next();
    }
}
//muestra un material por ID
exports.mostrarMaterial = async (req, res, next) => {

    const material = await Materiales.findById(req.params.idMaterial);
    if (!material) {
        res.json({ mensaje: 'No existe ese material' });
        return next();
    }

    res.json(material);
}

//actualizar producto por ID
exports.actualizarMaterial = async (req, res, next) => {
    try {
        let material = await Materiales.findByIdAndUpdate({_id : req.params.idMaterial},
            req.body,{
                new: true,
            });
        res.json(material);
    } catch (error) {
        
    }

}

//eliminar material por id
exports.eliminarMaterial = async (req, res, next) => {
    try {
        await Materiales.findOneAndDelete({ _id: req.params.idMaterial });
        res.json({ mensaje: 'Material eliminado' })
    } catch (error) {
        console.log(error);
        next();
    }

}
