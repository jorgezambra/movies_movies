const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

app.use(express.static('public'));

let movies = [
  {
    title: 'The Godfather',
    genre: 'Thriller'
  },
  {
    title: 'There Will Be Blood',
    genre: 'Drama'
  },
  {
    title: 'The Dark Knight',
    genre: 'Action and Adventure'
  },
  {
    title: 'JAWS',
    genre: 'Thriller'
  },
  {
    title: 'Pulp Fiction',
    genre: 'Drama'
  },
  {
    title: 'The Truman Show',
    genre: 'Fantasy'
  },
  {
    title: 'Mad Max Fury Road',
    genre: 'Action and Adventure'
  },
  {
    title: 'The Shining',
    genre: 'Horror'
  },
  {
    title: 'Alien',
    genre: 'Science Fiction'
  },
  {
    title: 'Star Wars',
    genre: 'Science Fiction'
  }
];

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.get('/', (req, res) => {
  res.send('This is Mah Movies');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
