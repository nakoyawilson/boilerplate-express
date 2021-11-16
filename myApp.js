var express = require('express');
var app = express();

console.log("Hello World");

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// })

publicPath = __dirname + "/public"
app.use("/public", express.static(publicPath));

indexPath = __dirname + "/views/index.html"
app.get("/", (req, res) => {
  res.sendFile(indexPath);
})


































module.exports = app;
