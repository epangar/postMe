const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    userNumber: String,
    password: String,
    name: String,
    surname: String,
    business: String,
    city: String,
    country: String,
    job: String,
    phoneNumber: String,
    role: {
      type: String,
      enum: ["user", "I.T.", "admin"],
      default: "user"
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