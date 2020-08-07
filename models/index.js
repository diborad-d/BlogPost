"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

if (config.use_env_variable) {
  const sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  const sequelize = new Sequelize(config.databse, config.username, config.password);
}

fs.readdirSync(__dirname).filter(file => {
  file.indexOf(".") !== 0 &&
    file !== basename &&
    file.slice(-3) ===
      ".js".forEach(file => {
        const model = this.sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;

        // console.log(model);
      });
});
db.sequelize = sequelize;

module.exports = db;
