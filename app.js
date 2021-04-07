const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from my Library App');
});

app.listen(8080, () => {
  debug(`listening on port ${chalk.green(8080)}`);
});
