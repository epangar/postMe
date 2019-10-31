require("dotenv").config();

const mongoose = require('mongoose');
const Ticket = require('../models/Ticket');
const dbURL = process.env.DBURL;

mongoose.connect(dbURL,  { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
  });

Ticket.collection.drop();



const tickets = [
  {
    ticketId: "badbad333",
    ticketNumber: 1,
    ticketTitle: "Prueba",
    ticketDetails: "Probando",
    userId: "C234F",
    open: false,
    status: "Closed",
    urgency: 0, 
    creationDate: new Date(),
    
},
{
    ticketId: "ccc345dac",
    ticketNumber: 2,
    ticketTitle: "Error texto",
    ticketDetails: "El texto aparece mal",
    userId: "DDDDDF6543",
    open: true,
    status: "Open",
    urgency: 2,
    creationDate: new Date(),
    
},
{
    ticketId: "BacCbadFe",
    ticketNumber: 3,
    ticketTitle: "Teléfono roto",
    ticketDetails: "Recambio",
    userId: "C234F",
    open: true,
    status: "Open",
    urgency: 3,
    creationDate: new Date(),
    
}
]

Ticket.create(tickets, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${tickets.length} tickets`)
    mongoose.disconnect();
  });