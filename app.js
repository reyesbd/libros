const express = require('express');
const app = express();
const puerto = 80;
const TemasController = require('./controllers/TemasControllers');

app.use(express.json());

app.get('/', function (req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Holi');
});

app.get('/temas', TemasController.indexGet);

app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");
});
