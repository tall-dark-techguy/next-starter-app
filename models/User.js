import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },

  date_created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
