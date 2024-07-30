const express = require('express');
var bodyParser = require('body-parser');//Nuevo
const app = express();
const puerto = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());//

const cors = require('cors');

const TemasController = require('./controllers/TemasControllers');
const AutoresController = require('./controllers/AutoresController');
const EditorialesController = require('./controllers/EditorialesControllers');
const LibrosController = require('./controllers/LibrosControllers');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', function (req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Holi');
});

app.get('/temas', TemasController.indexGet);
app.get('/temas/:id([0-9]+)', TemasController.itemGet);


app.get('/autores', AutoresController.indexGet);
app.get('/autores/:id([0-9]+)', AutoresController.itemGet);

app.get('/editoriales', EditorialesController.indexGet);

app.get('/libros', LibrosController.indexGet);
app.post('/temas', TemasController.indexPost);

app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");
});
