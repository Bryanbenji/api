const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

//CORS permite que un cliennbte se conecte a otro servidor par aintercambio de recursos
const cors = require('cors');

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/restapis', {
    // No need for useNewUrlParser and useUnifiedTopology options
});

// Create the server
const app = express();

// Enable Express built-in body parser to receive data in JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Habilitar cors
app.use(cors());

// Routes of the app
app.use('/', routes());

// Listening on the port
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
