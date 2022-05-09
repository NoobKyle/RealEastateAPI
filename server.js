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
// app.use(morgan());  //requests logging

var ads = [
  {address: "8655 Brookhollow Blvd, Frisco, Texas", cost: "$860 000", bedrooms: "4", squarefeet: 1600, garden: true, pool: false },
  {address: "47 Dawnhill Rd, Aubrey, Texas", cost: "$300 000", bedrooms: "1", squarefeet: 600, garden: false, pool: false },
  {address: "TestDelete", cost: "$300 000", bedrooms: "1", squarefeet: 600, garden: false, pool: false }
]

//Routes
//Read All
app.get('/properties', (req,res) => {
  res.send(ads);
});

//Create
app.post('/properties/create', (req, res) => {
  console.log(req.body);
  ads.push(req.body);
  res.sendStatus(200);
})

//Delete
app.post('/properties/delete', (req, res) => {
  console.log(req.body);
  var item = ads.indexOf(ads.find(element => element.address == req.body.address));
  ads.splice(item, item);
  res.sendStatus(200);
})

//Update
app.post('/properties/update', (req, res) => {
  console.log(req.body.address);
  var item = ads.indexOf(ads.find(element => element.address == req.body.address));
  ads[item] = req.body
  res.sendStatus(200);
})


//Start Server
app.listen(3001, () => {
  console.log('listening on port 3001')
})
