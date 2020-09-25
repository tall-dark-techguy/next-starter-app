import mongoose from "mongoose";

const connection = {};

const connectDB = async () => {
  if (connection.isConnected) return;

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log("Connected to DB: ", process.env.MONGO_URI);
};

module.exports = connectDB;
