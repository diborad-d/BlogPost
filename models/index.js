"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename.apply(module.filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json");
const db = {};



db.sequelize = sequelize;

module.exports = db;
