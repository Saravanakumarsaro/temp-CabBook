const mongoose = require('mongoose');

dbconnection = () => {
  return new Promise((resolve) => {
    mongoose.connect(`${process.env.CONNECTION_URL}${process.env.DB_NAME}`);
    const connected = mongoose.connection;
    connected.once('open', () => {
      resolve(true);
    });
    connected.once('error', () => {
      resolve(false);
    });
  });
};

module.exports = dbconnection;
