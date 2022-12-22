const express = require("express");

const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.post("/", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;
  res.send("The result of your calculations are: " + result);
});

app.listen(8000, function () {
  console.log("The server is running on port: 8000");
});
