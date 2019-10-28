const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema(
  {
    about: {
        type: String,
        required: [true, "Add a motive"]
      },
    description: {
        type: String,
        required: [true, "Add a description"]
      },
    number: Number,
    openBy: { 
        type: Schema.Types.ObjectId, ref: "User" 
      },
    assigendTo: { 
        type: Schema.Types.ObjectId, ref: "User" 
      },
    
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
);

const User = mongoose.model("Ticket", ticketSchema);
module.exports = User;