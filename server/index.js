require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { PORT } = require('../envConfigs.js');
const app = express();
const port = PORT || 3000;

app.use(morgan('dev'));

app.use(/(\/\d+)/, express.static('public'));

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
