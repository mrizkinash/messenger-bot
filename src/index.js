require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');

const viewEngine = require('./config/viewEngine');

// Routes import modules
const homeRouter = require('./routes/homeRoute');
const webhookRouter = require('./routes/webhookRoute');

// Set up express app
const app = express();

// Set view engine
viewEngine(app);

// Other utilities
app.use(bodyparser.json());

// App routes
app.use('/', homeRouter);
app.use('/webhook', webhookRouter);

const portNumber = process.env.PORT || 8000;
app.listen(portNumber, () => {
    console.log(`Server is running on Port ${portNumber}`);
})