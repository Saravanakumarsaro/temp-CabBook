const express = require('express');
const app = express();
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config();

const dbconnection = require('./src/connection/connection');

const initialCall = async () => {
  const connection = await dbconnection();
  if (connection) {
    app.listen(process.env.PORT, () => {
      console.log(
        `this application is listen to http://localhost:${process.env.PORT}`
      );
    });
  } else {
    console.log('Connection Failed');
  }
};

const routes = require('./src/route/route');
app.use(routes);

initialCall();
