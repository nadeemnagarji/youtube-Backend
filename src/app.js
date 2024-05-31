import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //middleware for accepting json and maximum size of request body
app.use(urlencoded({ extended: true, limit: "16kb" })); // middleware for accepting data from url  the extended:true lets u get nested objects
app.use(express.static("public")); // used to store some files on the server such as images or pdfs and can be accessed in this public folder
app.use(cookieParser()); // used to store cookies in users browser and access cookies from the browser

//routes import
import userRouter from "./routes/user.routes.js";
import videoRouter from "./routes/video.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/videos", videoRouter);

export { app };
