'use strict';

const express = require('express');

// Constants
let PORT = 8080;
let HOST = '0.0.0.0';
let redirect_domain = 'https://www.google.com/'
if (process.env.redirect_domain){
	redirect_domain = process.env.redirect_domain
}

// App
const app = express();
app.get('/', (req, res) => {
  res.redirect(redirect_domain);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);