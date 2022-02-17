const express = require('express');
const bodyParser = require('body-parser');
const adminBookRoutes = require('./routes/adminRoutes/bookRoute');
const adminCategoryRoutes = require('./routes/adminRoutes/categoryRoute');
const adminSubCategoryRoutes = require('./routes/adminRoutes/subCategoryRoute');


//create express app
const app = express();

//setup the server port
const port = process.env.PORT || 8000;

//parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse request data content type application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello World!");
});

//define admin route
app.use('/api/v1/admin/book', adminBookRoutes);
app.use('/api/v1/admin/category', adminCategoryRoutes);
app.use('/api/v1/admin/sub-category', adminSubCategoryRoutes);

app.listen(port, () => {
  console.log(`CongThanh's app is running on port ${port}`);
});
