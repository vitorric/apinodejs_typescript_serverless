import mongoose from 'mongoose';

const config = {
  MONGO_HOST: process.env.MONGO_HOST,
  MONGO_PORT: process.env.MONGO_PORT,
  MONGO_DB: process.env.MONGO_DB,
  MONGO_AUTH_SOURCE: process.env.MONGO_AUTH_SOURCE,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PWD: process.env.MONGO_PWD,
};

const options: mongoose.ConnectOptions = {
  keepAlive: true,
  connectTimeoutMS: 0,
};

let mongoUrl = '';

if (process.env.NODE_ENV === 'production') {
  mongoUrl = `mongodb://${config.MONGO_USER}:${config.MONGO_PWD}@${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}?authSource=${config.MONGO_AUTH_SOURCE}&authMechanism=SCRAM-SHA-1`;
} else {
  mongoUrl = `mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}`;
}

const db = mongoose.createConnection(mongoUrl, options);

db.once('connected', () => {
  console.log('Mongodb connection', process.env.NODE_ENV);
  return db;
});

db.on('disconnected', () => {
  console.log('connection disconnected');
});

db.on('error', (err) => {
  console.log('Error in mongodb connection: ', err);
});

export default db;
