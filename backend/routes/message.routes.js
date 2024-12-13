import express from "express"
const router=express.Router();
import protectRoute from "../middleware/protectRoute.js"
import { sendMessage,getMessage} from "../controllers/message.controller.js";

router.get("/:id",protectRoute,getMessage);
router.post("/send/:id",protectRoute,sendMessage);//before sendin the message just check whether the user is 
//logged in or not by  the middleware protectedRoute
export default router;
