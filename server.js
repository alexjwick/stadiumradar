const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static("express"));

const https = require('https');
const fs = require('fs');
const key = fs.readFileSync('./localhost-key.pem');
const cert = fs.readFileSync('./localhost.pem');
const server = https.createServer({key: key, cert: cert }, app);

app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
  });

const port = 3001;
server.listen(port, () => { console.log(`listening on ${port}`) });