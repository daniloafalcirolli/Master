require('dotenv').config();
const Express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

//RECEBENDO A EXPORTAÇÃO DO CONNECTION.JS
const Connection = require('./bd/connection');
const route = require('./routes/routes');
const app = Express();

app.use(cors());
app.use(Express.json());
app.use(route);
app.use(bodyparser.json({limit:'15mb'}));//aumentar tamanho do json
app.use(Express.urlencoded({limit:'15mb'}));//aumentar o tamanho da url

//UTILIZANDO O METODO
app.listen(process.env.APP_PORT, ()=>{
    console.log("Servidor ON na porta", process.env.APP_PORT);
    Connection.sync();
})