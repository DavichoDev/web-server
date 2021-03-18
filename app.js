const express = require('express');
require('dotenv').config();
const hbs = require('hbs');

const app = express();

const port = process.env.PORT; 

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

// Servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'David Carmona',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'David Carmona',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'David Carmona',
    titulo: 'Curso de Node'
  });
});
 
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});
 
app.listen(port , () => {
    console.log('App ejecutandose en el puerto: ', port);
});