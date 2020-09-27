import { handler } from "../../middlewares/handler";
import connectDB from "../../utils/connectDB";
import { signUp } from "../../controllers/signup";

connectDB();

handler.post("/api/signup", signUp);

export default handler;
