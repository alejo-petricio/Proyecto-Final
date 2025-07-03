"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Games",
      [
        {
          nombre: "The Legend of Zelda: Breath of the Wild",
          genero: "Aventura",
          plataforma: "Nintendo Switch",
          estado: "completado",
          calificacion: 9.5,
          tiempo_jugado: 120,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "God of War",
          genero: "Acción",
          plataforma: "PS5",
          estado: "jugando",
          calificacion: 8.7,
          tiempo_jugado: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Hollow Knight",
          genero: "Metroidvania",
          plataforma: "PC",
          estado: "pendiente",
          calificacion: null,
          tiempo_jugado: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Games", null, {});
  },
};
