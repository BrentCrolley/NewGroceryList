const path = require('path');
const router = require('./router.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const PORT = 27017;
//make sure to invoke express for when we use app.
const app = express();

app.use(express.static(path.join(__dirname, '..', 'frontend/src/index.jsx')))
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('api', router);

app.listen(PORT, () =>
console.log(`Server is listening at localhost:${PORT}`))