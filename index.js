const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('common'));

app.use(bodyParser.json());

app.use(express.static('public'));

let movies = [
  {
    id: 1,
    title: 'The Godfather',
    description: 'The Godfather is a 1972 American crime film directed by Francis Ford Coppola who co-wrote the screenplay with Mario Puzo, based on Puzos best-selling 1969 novel of the same name.' ,
    genre: 'Crime',
    director: 'Francis Ford Coppola',
    imageUrl: '',
    featured: 'yes'
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

let genres = [
  {
    name: 'Thriller',
    description: 'Thriller is a genre of fiction, having numerous, often overlapping subgenres. Thrillers are characterized and defined by the moods they elicit, giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety. Successful examples of thrillers are the films of Alfred Hitchcock.'
  },
  {
    name: 'Action',
    description: 'An action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, and frantic chases.'
  }
];

let directors = [
  {
    name: 'Francis Ford Coppola',
    bio: '',
    birth: '',
    death: ''
  },
  {
    name: 'Martin Scorsese',
    bio: '',
    birth: '',
    death: ''
  }
];

let users = [
  {
    username: 'jorge',
    password: 'hey',
    email: 'jorge@gmail.com',
    birthday: 02-08-1983,
    favorites: ''
  },
  {
    username: 'annie',
    password: 'jane',
    email: 'annie123@gmail.com',
    birthday: 08-02-1983,
    favorites:''
  }
];

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.get('/movies/:title', (req, res) => {
  res.json(movies.find((movie) =>
    { return movie.title === req.params.title }));
});

app.get('/genres', (req, res) => {
  res.json(genres);
});

app.get('/genres/:name', (req, res) => {
  res.json(genres.find((genre) =>
    { return genre.name === req.params.name }));
});

app.get('/directors', (req, res) => {
  res.json(directors);
});

app.get('/directors/:name', (req, res) => {
  res.json(directors.find((director) =>
    { return director.name === req.params.name }));
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  let newUser = req.body;

  if (!newUser.username) {
    const message = 'Missing "username" in request body';
    res.status(400).send(message);
  } else {
    users.push(newUser);
    res.status(201).send(newUser);
  }
});

app.put('/users/:username/:password', (req, res) => {
  res.send('Password has been updated');
});

app.post('/users/:username/:favorites', (req, res) => {
   res.send('Favorite movie has been added');
 });

 app.delete('/users/:username/:favorites', (req, res) => {
    res.send('Favorite movie has been removed');
  });

app.delete('/users/:username', (req, res) => {
  let user = users.find((user) => { return user.username === req.params.username });

  if (user) {
    users = users.filter((obj) => { return obj.username !== req.params.username });
    res.status(201).send('User ' + req.params.username + ' was removed.');
  }
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
