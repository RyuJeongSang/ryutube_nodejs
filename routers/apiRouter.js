import express from "express";
import routes from "../routes";
import {
  postAddComment,
  postRemoveComment,
  registerView,
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, registerView);
apiRouter.post(routes.addComment, postAddComment);
apiRouter.post(routes.removeComment, postRemoveComment);

export default apiRouter;
