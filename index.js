const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const constants = require('./config/constants');

const routes = require('./routes');

const auth = require('./tools/authentication');

// require('./database/db');

const app = express();

app.disable('x-powered-by');

app.use(logger(constants.LOG_FORMAT));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(fileUpload());
app.use(cors());

app.use(auth);

app.use(routes);

app.listen(constants.PORT, () => {
    console.log(`Server listen to port: ${constants.PORT}`);
});