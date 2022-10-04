const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();
//const validURL = require('valid-url');


app.use(express.json());

let url = "mongodb+srv://tannmayhedau619:Tanmay%40619@cluster0.fw1xhuw.mongodb.net/group25Database";
let port = process.env.PORT || 3000;


mongoose.connect(url, { useNewUrlParser: true })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));



// app.use('/', async function (req, res, next) {
//   let baseUrl = "http://localhost:3000"
//   if (!baseUrl) return res.status(400).send({ status: false, message: "baseUrl is invalid" });
//   next()
// })

app.use("/", route);

app.listen(port, function () {
  console.log("Express app running on port " + port);
});
