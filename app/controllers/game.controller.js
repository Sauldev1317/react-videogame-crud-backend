const express = require('express');
const app = express();
const Game = require("../model/game.model");

// Agregar un nuevo videojuego
exports.create = (req, res) => {
   // Validacion
   if (!req.body) {
    res.status(400).send({
      message: "Faltan el nombre"
    });
  }

  // Nuevo objeto de Game
  const game = new Game({
        name: req.body.name,
        developer: req.body.developer,
        description: req.body.description,
        img_url: req.body.img_url,
        release_date: req.body.release_date,
        active: req.body.active
  });

  // Guardar objeto en la database
  Game.create(game, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Ocurrió un error al guardar el videojuego."
      });
    else res.send(data);
  });
};
