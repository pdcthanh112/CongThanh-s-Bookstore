const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConn = require("./src/config/dbConfig/dbConnection");
const authRoutes = require("./src/routes/authRoutes");

const adminBookRoutes = require("./src/routes/adminRoutes/bookRoute");
const adminCategoryRoutes = require("./src/routes/adminRoutes/categoryRoute");
const adminSubCategoryRoutes = require("./src/routes/adminRoutes/subCategoryRoute");

const userBookRoutes = require("./src/routes/userRoutes/bookRoute");

require("dotenv").config();

//create express app
const app = express();


app.use(cors());
// app.all("/", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });


//parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse request data content type application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//define auth route
app.use("/api/v1", authRoutes);
//define admin route
app.use("/api/v1/admin/book", adminBookRoutes);
app.use("/api/v1/admin/category", adminCategoryRoutes);
app.use("/api/v1/admin/sub-category", adminSubCategoryRoutes);

//define user route
app.use("/api/v1/user/book", userBookRoutes);

dbConn();

//setup the server port
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`CongThanh's app is running on port ${port}`);
});
