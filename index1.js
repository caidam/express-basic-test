// import express
const express = require('express'); 

// create an application by calling express module
const app = express();

// we now have access to express methods using app.METHOD (ex: app.get())
// see more here : https://expressjs.com/en/4x/api.html

// create a constant to store the port number
const port = 5000;

// create a GET route
app.get("/", (req, res) => {
    res.send("Welcome to Express");
});



// listen for incoming connections with app.listen
app
    .listen(port, () => {
        console.info(`Server is listening on port ${port}`);
    })
    .on("error", (err) => {
        console.error("Error:", err.message);
    })

////////////////////////////

// req.params expample
const welcomeName = (req, res) => {
    res.send(`Welcome ${req.params.name}`);
  };
  
// ":name" is the marker of a parameter
app.get("/users/:name", welcomeName);

/////////////
const cocktails = [
{
    id: 1,
    name: "Margarita",
},
{
    id: 2,
    name: "Mojito",
},
{
    id: 3,
    name: "Cuba Libre",
},
];

const getCocktails = (req, res) => {
res.status(200).json(cocktails);
};

app.get("/api/cocktails", getCocktails);