import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function login(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json("Email not found");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(404).json("Password does not match");
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.json(token);
  } catch (error) {
    res.status(400).json("Server error");
  }
}

module.exports = {
  login,
};
