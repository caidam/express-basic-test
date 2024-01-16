const express = require("express");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });


// Create a GET / route, that must send back "Welcome to my favourite movie list"
app.get("/", (req, res) => {
    res.send("Welcome to my favourite movie list");
});


// Create a GET /api/movies route, this route must send back a 200 status and a 
// list of movies in a json format (use the movies array declared in the app )
const getMovies = (req, res) => {
    res.status(200).json(movies);
    };

app.get("/api/movies", getMovies);

// Create a GET /api/movies/:id route that will only return the movie matching with the id set in the url 
app.get("/api/movies/:id", (req, res) => {
  const movieId = parseInt(req.params.id);

  // Using the .find() method to search for the movie
  const foundMovie = movies.find((movie) => movie.id === movieId);

  if (foundMovie) {
    // If the movie is found, send it as a JSON response with a 200 status
    res.status(200).json(foundMovie);
  } else {
    // If the movie is not found, send a 404 status with a "Not Found" message
    res.status(404).send("Not Found");
  }
});