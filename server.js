const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");

//Init
const app = express();
app.use(helmet());  //rest API security
app.use(bodyParser.json()); //parse json
app.use(cors());  //cors for all requests.
app.use(morgan());  //requests logging

const ads = [
  {title: "hello, world"}
]

//Routes
app.get('/', (req,res) => {
  res.send(ads);
});

//Start Server
app.listen(3001, () => {
  console.log('listening on port 3001')
})
