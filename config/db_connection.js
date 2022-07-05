const mongoose = require("mongoose");
require("dotenv").config();

const uri = `mongodb+srv://rohan:${process.env.DB_PASSWORD}@cluster0.q65vdvb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri);

const connection = mongoose.connection;

module.exports = connection;
