require("dotenv").config();

const mongoose = require('mongoose');
const User = require('../models/User');
const dbURL = process.env.DBURL;
mongoose.connect(dbURL);
User.collection.drop();