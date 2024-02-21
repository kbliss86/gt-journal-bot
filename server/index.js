//Import
const express = require('express');
const app = express();
const apiRoutes = require('./routes');

app.use('/api', apiRoutes);

app.use((req, res) => {
    res.send('404: Page not found');
    console.log('failed on server index.js line 10')
    });

module.exports = app;