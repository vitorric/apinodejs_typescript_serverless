const AWS = require('aws-sdk');
const express = require('express');
const sls = require('serverless-http');

const routes = require('./infra/http/routes');

const app = express();

app.use(
  express.json({ limit: '1000MB' }),
  express.urlencoded({ limit: '2000MB', extended: true })
);

routes.default(app);

app.use((req, res, next) => {
  return res.status(404).json();
});

module.exports.handler = sls(app);
