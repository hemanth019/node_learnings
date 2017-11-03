const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

// app.get('/', (req,res) => {
//   res.send("Hello Express!");
// });
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');


// app.use((req, res, next) => {
//   var now = new Date().toString();
//   console.log(now +': '+req.method +' '+req.url);
//   fs.appendFile('server.log', now +': '+req.method +' '+req.url + '\n' );
//   next();
// });

// app.use((req, res, next) => {
//   // var now = new Date().toString();
//   // console.log(now +': '+req.method +' '+req.url);
//   // fs.appendFile('server.log', now +': '+req.method +' '+req.url + '\n' );
//   res.render('maintenance.hbs', {
//     pageTitle: 'Maintenance'
//   });
// });

app.use(express.static(__dirname + '/public'));


hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req,res) => {
  res.render('home.hbs', {
    welcomeMessage: 'Welcome!',
    pageTitle: 'Home Page'
  });
});

app.get('/about', (req,res) => {
  // res.send('its just about Hemanth!');
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.get('/bad', (req,res) => {
  res.send({
    error:"unable to handle the link!"
  });
});

app.listen(3000, () => {
  console.log('server is up on port 3000!');
});
