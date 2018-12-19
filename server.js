const EXPRESS = require('express');
var path = require('path');
const PORT = process.env.port || 3000;
const APP = EXPRESS();

APP.use(EXPRESS.urlencoded({
    extended: true
}));
APP.use(EXPRESS.json());

APP.use(require('./app/routing/htmlRoutse.js'));

APP.use(require('./app/routing/apiRoutes.js'));



APP.listen(PORT, function () {
    console.log("Server is running on " + PORT + " port");
});