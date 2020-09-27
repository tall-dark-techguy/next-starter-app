import { handler } from "../../middlewares/handler";
import connectDB from "../../utils/connectDB";
import { login } from "../../controllers/login";

connectDB();

handler.post("/api/login", login);

export default handler;
