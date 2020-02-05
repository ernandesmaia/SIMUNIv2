// const express = require('express');
const express = require('./server')
// const path = require('path');
// const bodyParser = require('body-parser');
// const cors = require('cors');
//const mongo = require('mongodb');
const mongoose = require('mongoose');

// const app = express();
// app.use(cors())
const charts = require('../routes/chart');

var url = "mongodb://localhost:27017/test";

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('foi...')
});

// require('./app/models/Geral')
// app.use(require('./routes'))

//SIM
// Mortes por Gênero
/*mongo.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("GERAL").find({"SEXO": "3"}).count().then(function(numItems) {
    console.log(numItems);
    callback(numItems);
  })
});*/

/* Mortes por Dia da Semana
mongo.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("GERAL").find({"dia_semana_nasc": "sÃ¡b"}).count().then(function(numItems) {
    console.log(numItems);
    callback(numItems);
  })
});*/

/* Mortes por Raça/Cor
mongo.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("GERAL").find({"RACACOR": "5"}).count().then(function(numItems) {
    console.log(numItems);
    callback(numItems);
  })
});*/

/*mongo.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("GERAL").find({"idade_obito_calculado": {$gte: 60}}).count().then(function(numItems) {
    console.log(numItems);
    callback(numItems);
  })
});*/

/*mongo.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("GERAL").find({"LOCNASC": "5"}).count().then(function(numItems) {
    console.log(numItems);
    callback(numItems);
  })
});*/

/*mongo.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("GERAL").find({"ESTCIVMAE": "9"}).count().then(function(numItems) {
    console.log(numItems);
    callback(numItems);
  })
});*/

/*mongo.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("GERAL").find({"PARTO": "2"}).count().then(function(numItems) {
    console.log(numItems);
    callback(numItems);
  })
});*/8

//SINASC

// app.use(express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// app.use(cors());
// app.use('/chart', charts);

const port = 3000;

express.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));