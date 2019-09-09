const express = require("express");
const app = express();
const port = 4200;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/sockets", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
