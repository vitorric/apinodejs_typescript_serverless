import express from 'express';
import sls from 'serverless-http';

import routes from './infra/http/routes';

const app = express();

app.use(
  express.json({ limit: '1000MB' }),
  express.urlencoded({ limit: '2000MB', extended: true })
);

routes(app);

app.use((req, res, next) => {
  return res.status(404).json();
});

module.exports.handler = sls(app);
