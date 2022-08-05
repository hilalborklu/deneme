const express = require("express");
const mongoose = require("mongoose");
const router = express();
var bodyParser = require("body-parser");
const { response, request } = require("express");

var url =
  "mongodb+srv://hilalborklu:Hilal.34@cluster0.o3djt.mongodb.net/Deneme?retryWrites=true&w=majority";
var connection = mongoose.createConnection(url);

var model1 = connection.model("model", require("./model.js"));
var model2 = connection.model("postModel", require("./postModel.js"));

router.get("/users", async (request, response) => {
  var users = await model1.find({
    HP: 60,
    "Type 1": "Steel",
    Speed: { $gte: 50 },
  });
  response.send(users);
  console.log(users);
  model1.insertMany({});
});

router.post("/poke", async (request, response) => {
  const HP = request.query.HP;
  const Speed = request.query.Speed;

  var users = await model1.find({ HP: HP, Speed: { $gte: Speed } });
  console.log(users);
  model2.insertMany(users);
  response.send(users);
});

module.exports = router;
