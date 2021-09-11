const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const helmet = require('helmet');
const cors = require('cors');
const router = require('./routers/index.router');
const db = require('./model/db.model')


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
app.use(cors())
app.use('/api',  router);

db.authenticate()
.then(() => console.log('Database connected...',process.env.DB_DATABASE))
.catch(err => console.log('Error:::: ' + err))

module.exports=app;