import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "RyuTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

export const toBypassCsp = (req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self'  https://archive.org"
  );
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
