import express from "express";
import mongoose from "mongoose";
import courseRouter from "./routes/course-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";

const app = express();

const db =
  "mongodb+srv://connectafeefnk:60qp3J91rg7KtorD@vaashi-elearning.wlagu.mongodb.net/?retryWrites=true&w=majority&appName=Vaashi-ELearning";

app.use(cors());
app.use(express.json());

app.use("/api/user", router);
app.use("/api/course", courseRouter);
mongoose
  .connect(db)
  .then(() => app.listen(5001))
  .then(() =>
    console.log("Connected to database and listening to localhost:5001")
  )
  .catch((err) => console.log(err));