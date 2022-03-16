//METODO PARA CONEXÃO COM O BANCO DE DADOS
require('dotenv').config();
const {Sequelize} = require('sequelize');
const usuario = require('../model/usuario');
const reserva = require('../model/reserva');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER,"", {
    host: process.env.HOST,
    dialect: 'mysql',
    define: {
      timestamps: false,
    }
  });

  //METODO
  const sync = () =>{
      usuario.init(sequelize);
      reserva.init(sequelize);
      //usuario.associate(sequelize.models);
    
      sequelize.sync({force: false});
  }

  //EXPORTANDO OS METODOS CRIADOS ACIMA
  module.exports = {
    sequelize,
    sync
  }