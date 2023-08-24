const express = require('express');
const bodyParser = require('body-parser');

const movies = require('./movies.json');

app.get('/movies', (req, res) => {
    res.json(movies);
});

app.post('/movies', (req, res) => {
    const newMovie = req.body;
    newMovie.id = movies.length + 1; 
    movies.push(newMovie);
    res.json(newMovie);
});

app.delete('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = movies.findIndex(movie => movie.id === id);
    if (index !== -1) {
        movies.splice(index, 1);
    }
    res.json({ message: 'Movie deleted', id });
});


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
