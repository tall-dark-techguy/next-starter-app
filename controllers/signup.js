import User from "../models/User";
import bcrypt from "bcryptjs";

async function signUp(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) return res.status(409).send("user exists");

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    await User.create({ email, password: hashed });
    res.json({ message: "User created", success: true });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports = {
  signUp,
};
