import { handler } from "../../middlewares/handler";
import connectDB from "../../utils/connectDB";
import { login } from "../../controllers/login";

connectDB();

// @POST '/api/login'
handler.post(login);

export default handler;
