const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello from my Library App');
});

app.listen(8080, () => {
  debug(`listening on port ${chalk.green(8080)}`);
});
