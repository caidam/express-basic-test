[ref](https://odyssey.wildcodeschool.com/quests/384)

### Install Express

```bash
mkdir express-app

cd express-app

npm init -y

npm install express
```

### Install Nodemon
Nodemon will listen for changes in your files and will automatically reload the server.

1. Install nodemon using npm

```bash
npm install nodemon --save-dev
```

> Here we install nodemon in the dev dependencies because we will use nodemon only when we will develop our project.
We don't want this package to be installed and used in production.

2. Adapt package.json

```json
"main": "index.js",
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

3. restart server using `npm run dev`

### Create a route

Routes definition should look like this:

```js
app.METHOD(PATH, HANDLER);
```

- app is an instance of Express.
- METHOD is an HTTP request method (GET, POST, PUT, DELETE, etc.).
- PATH is an url path on the server.
- HANDLER is the function executed when the route is triggered.

#### Handler

The HANDLER is a function executed when the route matches the request. 

```js
// often tied with the route
app.get("/search", (req, res) => {});


// for learning purposes it is important to conceptualize route declaration and HANDLER separately

const handler = (req, res) => {};

app.get("/search", handler);
```

The HANDLER takes 2 parameters, corresponding to 2 HTTP objects defined in Express: Request (request, req) and Response (response, res).
