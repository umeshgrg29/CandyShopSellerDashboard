const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const Candy = sequelize.define('candy', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  candyname: Sequelize.STRING,
  description: {
    type: Sequelize.STRING,
  },
  price : Sequelize.INTEGER,
  quantity : Sequelize.INTEGER
});



module.exports = Candy;
