require('dotenv').config()
const httpRequest = require('http');
const express = require('express');
var process = require('process');
const app = express();

const cookieParser = require('cookie-parser');
const session = require('express-session');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./server/routers/index.router');

app.use(express.static('build'))
app.use(express.static(__dirname + './build'));

app.use(helmet());
app.use(session({
    "secret": "7he_gr3@T3st-s3ss10n-p@sS",
    "resave": true,
    "saveUninitialized": true,
    "cookie": {
        "path": "/"
    }
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,"limit": "50mb"}));
app.use(cors())
app.use('/api',  router);

const certificate = {
    // key: fs.readFileSync(path.join(__dirname, "cert/key.pem")),
    // cert: fs.readFileSync(path.join(__dirname, "cert/cert.pem"))
}

const PORT = process.env.PORT || 3000;
const server = httpRequest.createServer(certificate, app).listen(PORT, function() {
    console.log(`server started \nport ${PORT} \nopen ${process.env.HOSTNAME}:${PORT}/`);
});