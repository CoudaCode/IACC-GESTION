import express from "express";
import { config } from "dotenv";
import { connectDB } from "./config/db.js";
import { inProduction } from "./config/env.js";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import { fileURLToPath } from "url";
import AdminRoute from "./routes/adminRoute.js";
const app = express();
config({
  path: path.join(process.cwd(), ".env.local"),
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Image"));

app.use(cookieParser());
app.use("/Image", express.static(path.join(__dirname, "Image")));
// app.use(express.static(path.join(__dirname, "../client/dist")));
// if (inProduction) {
//   app.get("/*", (_, res) => {
//     res.sendFile(path.join(__dirname, "../client/dist/index.html"));
//   });
// }

connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((e) => {
    console.log(
      "An orror has occured while connecting to mongodb : ",
      e.message
    );
  });

app.use("/api/admin", AdminRoute);
