var express = require('express');
var app = express();
require('dotenv').config()

console.log("Hello World");

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// })

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

































module.exports = app;
