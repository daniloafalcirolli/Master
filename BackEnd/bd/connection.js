//METODO PARA CONEXÃO COM O BANCO DE DADOS
require('dotenv').config();
const {Sequelize} = require('sequelize');

const agenda = require('../model/agenda');
const ambiente = require('../model/ambiente');
const componente = require('../model/componente');
const tipoAmbiente = require('../model/tipoAmbiente');
const turma = require('../model/turma');
const usuario = require('../model/usuario');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER,"", {
    host: process.env.HOST,
    dialect: 'mysql',
    define: {
      timestamps: false,
    }
  });

  //METODO
  const sync = () =>{
    agenda.init(sequelize);
    ambiente.init(sequelize);
    componente.init(sequelize);
    tipoAmbiente.init(sequelize);
    turma.init(sequelize);
    usuario.init(sequelize);
      
    agenda.associate(sequelize.models);
    ambiente.associate(sequelize.models);
    componente.associate(sequelize.models);
    tipoAmbiente.associate(sequelize.models);
    turma.associate(sequelize.models);
    usuario.associate(sequelize.models);
    
    sequelize.sync({force: true});
  }

  //EXPORTANDO OS METODOS CRIADOS ACIMA
  module.exports = {
    sequelize,
    sync
  }