'usr strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('*', (req, res) =>  res.send('<html><head><title>Ping App</title></head><body><h1>Success!</h1></body></html>'));

app.listen(PORT, HOST);

console.log(`Now listening on http://${HOST}:${PORT}`);

