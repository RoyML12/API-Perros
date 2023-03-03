const express = require("express");
const registroSchema = require("../models/registro")

const router = express.Router();

//crear perro
router.post('/users', (req, res) => {
    const registro = registroSchema(req.body);
    registro
        .save()
        .then ((data) => res.json(data))
        .catch((error) => res.json({ message: error}));

});

//obtener perros
router.get('/users', (req, res) => {
    registroSchema
        .find()
        .then ((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//obtener un perro
router.get('/users/:id', (req, res) => {
    const {id} = req.params;
    registroSchema
        .findById(id)
        .then ((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//actualizar perro
router.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const {nombre, edad, fechaNacimiento, raza, telefono} = req.body;
    registroSchema
        .updateOne({_id: id}, {$set: {nombre, edad, fechaNacimiento, raza, telefono}})
        .then ((data) => res.json(data))
        .catch((error) => res.json({ message: error}));
});

//BORRAR PERRO
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    registroSchema
      .delete({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports= router;
