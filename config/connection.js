require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('startifacts_db', 'root', '112990', {
      host: 'localhost',
      dialect: 'mysql'
    });



module.exports = sequelize;
