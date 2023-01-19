const express = require('express');
const app = express();
const path = require('path');

const https = require('https');
const fs = require('fs');
const key = fs.readFileSync('./localhost-key.pem');
const cert = fs.readFileSync('./localhost.pem');
const server = https.createServer({ key: key, cert: cert }, app);

app.use('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/express/index.html'));
});

app.get('/stadiums', (req, res) => {
  fs.readFile('./data/stadiums.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.send(data);
  })
});

const port = 3001;
server.listen(port, () => { console.log(`listening on ${port}`) });