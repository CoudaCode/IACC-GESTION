import clientController from "../controllers/clients.js";
import { Router } from "express";

const router = Router();

router.get("/Automobile", clientController.getAutomobile);
router.get("/sante", clientController.getSante);

export default router;