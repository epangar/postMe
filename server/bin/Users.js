require("dotenv").config();

const mongoose = require('mongoose');
const User = require('../models/User');
const dbURL = process.env.DBURL;

mongoose.connect(dbURL,  { 
  useUnifiedTopology: true,
  useNewUrlParser: true 
});

User.collection.drop();



const users = [
  {
  username : "admin",
  userNumber: "C234F",
  name: "Servicio",
  surname: "Soporte",
  business: "Telefónica",
  city: "Madrid",
  country: "Spain",
  job: "Servicio de Soporte",
  phoneNumber: "123456789",
  password: "1234",
  role: "admin"
  },
  {
  username : "bernard",
  userNumber: "C124S",
  name: "Servicio",
  surname: "Soporte",
  business: "Telefónica",
  city: "Madrid",
  country: "Spain",
  job: "Servicio de Soporte",
  phoneNumber: "123456789",
  password: "1234",
  role: "I.T."
  }
];


User.create(users, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${users.length} users`)
  mongoose.disconnect();
});