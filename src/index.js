require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');

const viewEngine = require('./config/viewEngine');

// Routes import modules
const homeRouter = require('./routes/homeRoute');

// Set up express app
const app = express();

// Set view engine
viewEngine(app);

app.use(bodyparser.json());

app.use('/', homeRouter);

const portNumber = process.env.PORT || 8000;
app.listen(portNumber, () => {
    console.log(`Server is running on Port ${portNumber}`);
})