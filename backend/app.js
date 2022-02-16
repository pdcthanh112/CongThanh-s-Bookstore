const express = require("express");
const bodyParser = require("body-parser");
const categoryRoutes = require("./routes/adminRoutes/categoryRoute");

//create express app
const app = express();

//setup the server port
const port = process.env.PORT || 8000;

//parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse request data content type application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`CongThanh's app is running on port ${port}`);
});
