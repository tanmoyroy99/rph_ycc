require('dotenv').config()
const httpRequest = require('http');
var process = require('process');
const app = require('./server/app')



const certificate = {
}

const PORT = process.env.PORT || 3000;
const server = httpRequest.createServer(certificate, app).listen(PORT, function() {
    console.log(`server started \nport ${PORT} \nopen ${process.env.HOSTNAME}:${PORT}/`);
});