const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...



// Add the route handlers here:




app.get('/beers', (req, res) => {
  punkAPI.getBeers().then(beersFromApi = (beer)=> res.render(
    'beers', beer)
    ).catch(
      error => console.log(error)
  );
  console.log(beersFromApi);
  });



app.get('/', (req, res) => {
  res.render('index');
  console.log("Home");
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));
