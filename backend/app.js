import express from "express";
import { config } from "dotenv";
import { connectDB } from "./config/db.js";
import { inProduction } from "./config/env.js";
import session from "express-session";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import { fileURLToPath } from "url";
import AdminRoute from "./routes/adminRoute.js";
import clientRoute from "./routes/clientRoute.js";
import superAdminRoute from "./routes/superAdminRoute.js";
import automobile from "./routes/automobile.js";
import bilan from "./routes/bilan.js";
const app = express();
config({
  path: path.join(process.cwd(), ".env.local"),
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Image"));


app.use(cookieParser());
app.use("/Image", express.static(path.join(__dirname, "Image")));
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

  
app.use("/api/super", superAdminRoute);
app.use("/api/admin", AdminRoute);
app.use("/api/client", clientRoute);
app.use("/api/bilan", bilan);
app.use("/api/auto", automobile);
