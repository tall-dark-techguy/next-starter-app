import jwt from "jsonwebtoken";

async function auth(req, res, next) {
  const token = req.headers["x-auth-token"] || null;

  if (!token) return res.status(401).json("No token");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  auth,
};
