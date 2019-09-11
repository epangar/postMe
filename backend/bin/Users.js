require("dotenv").config();

const mongoose = require('mongoose');
const User = require('../models/User');
const dbURL = process.env.DBURL;
mongoose.connect(dbURL);
User.collection.drop();



const employees = [
  {
  username : "admin",
  password: "1234",
  role: "admin"
  },
  {
  username : "bernard",
  password: "1234",
  role: "worker"
  }
];

User.create(employees, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${employees.length} employees`)
  mongoose.disconnect();
});