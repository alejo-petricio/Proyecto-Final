const { Game } = require("../models");

// GET /api/tasks - Obtener todas las tareas
const getAllGames = async (req, res) => {
  try {
    res.status(200).json(await Game.findAll());
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching Games", message: error.message });
  }
};

// GET /api/Games/:id - Obtener tarea por ID
const getGameById = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findByPk(id);

    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }

    res.json({ game });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching Game", message: error.message });
  }
};

// POST /api/Games - Crear nueva tarea
const createGame = async (req, res) => {
  try {
    const { nombre, genero, plataforma, estado, calificacion, tiempo_jugado } =
      req.body;

    const game = await Game.create({
      nombre,
      genero,
      plataforma,
      estado: estado || "pendiente",
      calificacion,
      tiempo_jugado,
    });

    res.status(201).json({
      message: "Game created successfully",
      game,
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error creating Game", message: error.message });
  }
};

// PUT /api/Games/:id - Actualizar tarea
const updateGame = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, genero, plataforma, estado, calificacion, tiempo_jugado } =
      req.body;

    const game = await Game.findByPk(id);
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    if (calificacion !== undefined && (calificacion < 0 || calificacion > 10)) {
      return res
        .status(400)
        .json({ error: "La calificación debe estar entre 0 y 10" });
    }

    const estadosValidos = ["completado", "jugando", "pendiente"];
    if (estado !== undefined && !estadosValidos.includes(estado)) {
      return res.status(400).json({
        error: `El estado solo puede ser "completado", "jugando" o "pendiente"`,
      });
    }

    const updatedGame = await game.update({
      nombre: nombre || game.nombre,
      genero: genero || game.genero,
      plataforma: plataforma || game.plataforma,
      estado: estado || game.estado,
      calificacion: calificacion || game.calificacion,
      tiempo_jugado: tiempo_jugado || game.tiempo_jugado,
    });

    res.json({
      message: "Game updated successfully",
      Game: updatedGame,
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Error updating Game", message: error.message });
  }
};

// DELETE /api/Games/:id - Eliminar tarea
const deleteGame = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findByPk(id);

    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }

    await game.destroy();
    res.json({ message: "Game deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error deleting Game", message: error.message });
  }
};

module.exports = {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
};
