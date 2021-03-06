const mongoose = require("mongoose");
const extendSchema = require('mongoose-extend-schema');
const userSchema = require('./User')
const Schema = mongoose.Schema;
const uuid = require('uuid');

/* const ticketSchema = new Schema(
  { 
    
    // username: {
    //     type: Schema.Types.ObjectId, ref: "User" 
    //   },
    // userId: {
    //     type: Schema.Types.ObjectId, ref: "User" 
    //   },
    // name: {
    //     type: Schema.Types.ObjectId, ref: "User" 
    //   },
    // surname: {
    //     type: Schema.Types.ObjectId, ref: "User" 
    //   },  
    // business: {
    //   type: Schema.Types.ObjectId, ref: "User" 
    //   },
    // city: {
    //   type: Schema.Types.ObjectId, ref: "User" 
    //   },
    // country: {
    //   type: Schema.Types.ObjectId, ref: "User" 
    //   },
    // phoneNumber: {
    //   type: Schema.Types.ObjectId, ref: "User" 
    //   },
    // email: {
    //   type: Schema.Types.ObjectId, ref: "User" 
    //   },
    
    ticketTitle: String,
    ticketDetails: String,
    number: Number,
    // openBy: { 
    //     type: Schema.Types.ObjectId, ref: "User" 
    //   },
    // assignedTo: { 
    //     type: Schema.Types.ObjectId, ref: "User" 
    //   },
    
    open: {
            type: Boolean,
            default: true,
    },
    currentStatus : {
        type: String,
        enum: ["CLOSED", "OPEN"],
        default: "OPEN"
      },
    urgency : {
      type: Number,
      enum: [1,2,3],
      default: 2
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
); */


const ticketSchema = extendSchema(userSchema, {
  ticketTitle: {type: String, required: true},
  ticketDetails: {type: String, required: true},
  open: {
            type: Boolean,
            default: true,
    },
    currentStatus : {
        type: String,
        enum: ["CLOSED", "OPEN"],
        default: "OPEN"
      },
    urgency : {
      type: Number,
      enum: [1,2,3],
      default: 2
    },
  
    /* timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    } */
  
});


const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;