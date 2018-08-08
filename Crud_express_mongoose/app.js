const express = require("express");
const bodyParser = require("body-parser");
const product = require("./routes/product.route");
const mongoose = require("mongoose");

let port = 1234;
const app = express();
let dev_db_url = `mongodb://adarshnj:Adarsh12@ds215822.mlab.com:15822/producttest`;

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(`/products`, product);

app.listen(port, () => {
  console.log(`Server is up and running on port number ${port}`);
});
