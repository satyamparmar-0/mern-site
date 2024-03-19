
  const express = require('express');
  const app = express();
  const Joi = require('joi')
  const logger = require('./logger')

  // console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
  // console.log(`app: ${app.get('env')}`);
  
  app.use(express.json());
  app.use(logger);
  app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

  //query parameter for sort the databases 
  app.get('/name/:name',(req,res)=>{
    res.send(req.query)
  })

  app.get('/api/genres',(req,res)=>{
    res.send("all types of movies available")
  })

  setTimeout(()=>{
      console.log('this is timeout function it takes two second to execute');
  },2000)
  const port = process.env.PORT || 3000;


  const func = async()=>{
    console.log("this is a arrow function ");
  }
module.exports = ()=>{
  console.log("this is a use of async and await ")
}

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });


