var express = require('express');
var app = express();
require('dotenv').config()
const bodyParser = require("body-parser");

console.log("Hello World");

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// })

app.use(bodyParser.urlencoded({ extended: false }));

publicPath = __dirname + "/public"
app.use("/public", express.static(publicPath));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

indexPath = __dirname + "/views/index.html"
app.get("/", (req, res) => {
  res.sendFile(indexPath);
});

app.get("/json", (req, res) => {
  message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": message.toUpperCase() });
  } else {
    res.json({ "message": message });
  }
});

app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
},
  (req, res) => {
    res.json({ "time": req.time });
  });

app.get("/:word/echo", (req, res) => {
  const word = req.params.word;
  res.json({ "echo": word })
});

app.get("/name", (req, res) => {
  const { first, last } = req.query;
  res.json({ "name": `${first} ${last}` });
});

app.post("/name", (req, res) => {
  const { first, last } = req.body;
  res.json({ "name": `${first} ${last}` });
});
































module.exports = app;
