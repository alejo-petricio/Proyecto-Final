// backend/models/index.js
const { Sequelize } = require("sequelize");
const config = require("../config/database");
const GameModel = require("./game");

const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging,
    pool: dbConfig.pool,
    dialectOptions: dbConfig.dialectOptions,
  }
);

const Game = GameModel(sequelize, Sequelize.DataTypes);

module.exports = {
  sequelize,
  Sequelize,
  Game,
};
