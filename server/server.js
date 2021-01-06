require('dotenv').config()
const httpRequest = require('http');
const express = require('express');
const process = require('process');
const app = express();

const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.static('build'))
app.use(express.static(__dirname + './build'));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,"limit": "50mb"}));
app.use(cors())

const PORT = process.env.PORT || 4000;
const certificate = {}
const server = httpRequest.createServer(certificate, app).listen(PORT, function() {
    console.log(`server started.. \nport ${PORT} \nopen ${process.env.HOSTNAME}:${PORT}/`);
});