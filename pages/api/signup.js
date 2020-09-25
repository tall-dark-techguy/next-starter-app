import { handler } from "../../middlewares/handler";
import connectDB from "../../utils/connectDB";
import { signUp } from "../../controllers/signup";

connectDB();

// @POST '/api/signup'
handler.post(signUp);

export default handler;
