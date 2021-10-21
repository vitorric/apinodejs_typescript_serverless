/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');
const path = require('path');

module.exports = async () => {
  // Load env vars into Serverless environment
  // You can do more complicated env var resolution with dotenv here
  const envVars = dotenv.config({
    path: path.resolve(`.env.${process.env.NODE_ENV}`),
  });

  return {
    ...envVars, // `dotenv` environment variables
    ...process.env, // system environment variables
  };
};
