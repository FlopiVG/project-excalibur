const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI);

// eslint-disable-next-line no-console
mongoose.connection.on('error', error => console.log(`Mongoose error${error}`));

// eslint-disable-next-line no-console
mongoose.connection.once('connected', () => console.log('Mongo connected.'));
