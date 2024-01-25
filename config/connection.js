const Sequelize = require('sequelize');
require('dotenv').config();

// Creating a Sequelize instance and connecting to the database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  dialectOptions: {
    decimalNumbers: true,
  },
});

module.exports = sequelize;
