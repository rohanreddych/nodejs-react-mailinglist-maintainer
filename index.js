const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const client = require("./addEmail");
const sendEmail = require("./sendEmail");
var path = require("path");

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.post("/addemail", (req, res) => {
  var email = req.body.email;

  client.connect(async function (err) {
    if (err) {
      console.error("Database connection error");
      res.status(500).send("Error in database");
    }
    const collection = client.db("mailer").collection("emails");
    const a = { email: email };
    const mongores = await collection.insertOne(a);
    client.close();
  });
  sendEmail(email);
  res.send("Success");
});

app.get("/addemail", (req, res) => {
  res.send("get path working");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("listening to ports");
});
