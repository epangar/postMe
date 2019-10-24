require("dotenv").config();

const mongoose = require('mongoose');
const User = require('../models/User');
const dbURL = process.env.DBURL;

mongoose.connect(dbURL,  { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
  });

User.collection.drop();

const tickets = [

]

Ticket.create(tickets, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${tickets.length} tickets`)
    mongoose.disconnect();
  });