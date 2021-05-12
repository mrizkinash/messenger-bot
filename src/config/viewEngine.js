const express = require('express');

// View engine config for the Node App
let viewEngine = (app) => {
    app.set('view engine', 'ejs');
    app.set('views', './src/views');
}

module.exports = viewEngine;