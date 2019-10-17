require("dotenv").config();

const mongoose = require('mongoose');
const User = require('../models/User');
const dbURL = process.env.DBURL;
mongoose.connect(dbURL);
User.collection.drop();



const users = [
  {
  username : "admin",
  userNumber: "000001",
  password: "1234",
  role: "admin"
  },
  {
  username : "bernard",
  password: "1234",
  role: "user"
  }
];

User.create(users, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${users.length} users`)
  mongoose.disconnect();
});