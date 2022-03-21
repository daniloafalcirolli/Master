//METODO PARA CONEXÃO COM O BANCO DE DADOS
require('dotenv').config();
const {Sequelize} = require('sequelize');

const componente = require('../model/componente');
const tipoAmbiente = require('../model/tipoAmbiente');
const ambiente = require('../model/ambiente');
const turma = require('../model/turma');
const usuario = require('../model/usuario');
const agenda = require('../model/agenda');
const turmaComponente = require('../model/turmaComponente');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER,"", {
    host: process.env.HOST,
    dialect: 'mysql',
    define: {
      timestamps: false,
    }
  });

  //METODO
  const sync = () =>{
    componente.init(sequelize);
    tipoAmbiente.init(sequelize);
    usuario.init(sequelize);
    turma.init(sequelize);
    turmaComponente.init(sequelize);
    ambiente.init(sequelize);
    agenda.init(sequelize); 
          
    
     

    componente.associate(sequelize.models);  
    tipoAmbiente.associate(sequelize.models);
    ambiente.associate(sequelize.models);
    turma.associate(sequelize.models);
    usuario.associate(sequelize.models);  
    agenda.associate(sequelize.models);
    turmaComponente.associate(sequelize.models);

    sequelize.sync({force: true});
  }

  //EXPORTANDO OS METODOS CRIADOS ACIMA
  module.exports = {
    sequelize,
    sync
  }