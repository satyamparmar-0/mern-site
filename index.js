
  const express = require('express');
  const app = express();
  const Joi = require('joi')
  const dotenv = require('dotenv');
  const connectdb = require('./Database/config')

  // console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
  // console.log(`app: ${app.get('env')}`);
  dotenv.config();
  app.use(express.json());

  const UserRoutes = require('./Routes/User');

  app.use('/user',UserRoutes)

  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  const port = 5000;

connectdb();

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });


