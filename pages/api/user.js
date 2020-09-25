import connectDB from "../../utils/connectDB";
import { handler } from "../../middlewares/handler";
import { auth } from "../../middlewares/auth";

connectDB();

handler.get("/api/user", auth, (req, res) => {
  res.json("Desmond Charles");
});

export default handler;
