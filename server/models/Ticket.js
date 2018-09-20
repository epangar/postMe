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
    open: {
            type: Boolean,
            default: true,
    },
    status : {
        type: String,
        enum: ["CLOSED", "OPEN"],
        default: "OPEN"
      },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;