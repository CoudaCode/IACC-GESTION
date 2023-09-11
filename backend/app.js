import express from "express";
import { config } from "dotenv";
import { connectDB } from "./config/db.js";
import { inProduction } from "./config/env.js";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const app = express();
config({
  path: path.join(process.cwd(), ".env.local"),
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Image"));
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


  // MONGO_URI="mongodb+srv://coudadm:b0MezXlYq7cH8AsC@iacc-gest.glnvern.mongodb.net/?retryWrites=true&w=majority"
// tokenSecret="it's_my_token_secret_123*"
// PASSWORD=b0MezXlYq7cH8AsC