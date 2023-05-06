// Load a mudule api
const myApi = require('./api/restapi');

// Load a module express
const express = require('express');
const app = express();

// Load a modul cors
const cors = require("cors");

// Set cors options
const whitelist = ["http://127.0.0.1:5555", "http://localhost:3000"];
const corsOption = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not Allowed Origin!"));
        }
    },
};

app.use(cors(corsOption));

// Listen http with port
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// Respond about calling RESTful API
app.get('/', myApi.get);