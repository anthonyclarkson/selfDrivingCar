// ------------------------------------------------------------------------
// Required modules

const express = require('express');
const dotenv = require('dotenv').config();

// ------------------------------------------------------------------------
// Initialise app

const app = express();

// ------------------------------------------------------------------------
// Auth0


// access all profile data when logged in here

// ------------------------------------------------------------------------
// main Public folder for served files

app.use(express.static('./src/public', {extensions: ['html', 'css', 'js', 'mjs']} ))

// ------------------------------------------------------------------------


// ------------------------------------------------------------------------
// serving individual brick pages

// ------------------------------------------------------------
// error codes

/*
app.use((req, res, next) => {
    res.status(404).sendFile('404.html', { root: './src/codes' });
});
*/

// ------------------------------------------------------------------------
// server listen on port

app.listen(3000);
