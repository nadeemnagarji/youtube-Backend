import express, { Router } from "express";
import { getAllVdieos, uploadVideo } from "../controllers/video.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
``;
const videoRouter = Router();

videoRouter.route("/all").get(getAllVdieos);

videoRouter.route("/upload").post(
  verifyJwt,
  upload.fields([
    {
      name: "video",
      maxCount: 1,
    },
    {
      name: "thumbnail",
      maxCount: 1,
    },
  ]),
  uploadVideo
);

export default videoRouter;
