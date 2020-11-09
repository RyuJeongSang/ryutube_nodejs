import express from "express";
import routes from "../routes";
import { postAddComment, registerView } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, registerView);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
