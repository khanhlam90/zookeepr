const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
const { animals } = require('./data/animals.json');

const PORT = process.env.PORT || 3001;
const app = express();

// because require() of animals only create a copy of animals to use in this server.js
// push method does not override the orignal file, therefore, have to import and use the fs library to write that data to animals.json
const fs = require('fs');
const path = require('path'); //module of node.js

//we dont have to create a route for every front-end asset (css, js, etc.) like how we create routes for index.html
//therefore, we can use more Express.js middleware to instruct server to make certain files readily available
app.use(express.static('public'));

// parse incoming string or array data -  middleware functions need to be set up every time you create a server that's looking to accept POST data.
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data - POST
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });


