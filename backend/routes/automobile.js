import { Router } from "express";
import automobileController from "../controllers/automobile.js";

const router = Router();

router.post("/", automobileController.createAutomobile);


export default router;