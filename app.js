const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const mongoose = require('./config');
const routes = require('./routes/index');

const app = express();

app.set('secretKey', 'nodeRestApi');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/users', users);
app.use('/routes', isLoggedIn, routes);

const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database.");
    })
    .catch(err => {
        console.log("Cant connect to the database.", err);
        process.exit();
    });


app.get('/', function (req, res) {
    res.json({
        "welcome": "Child data api"
    });
});
//middleware
function isLoggedIn(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
            res.json({
                status: "error",
                message: err.message,
                data: null
            });
        } else {
            req.body.userId = decoded.id;
            next();
        }
    });

}
//error
app.use(function (req, res, next) {
    let err = new Error('Error 404: Page not found. ');
    err.status = 404;
    next(err);
});
app.use(function (err, req, res, next) {
    console.log(err);
    if (err.status === 404)
        res.status(404).json({
            message: "Error 404: Page not found. "
        });
    else
        res.status(500).json({
            message: "Error 500: It's not you it's us."
        });
});
//port
app.listen(8080, function () {
    console.log('Server is listening on port 8080');
});