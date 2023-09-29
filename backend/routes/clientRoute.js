import { Router } from "express";
import withUser from "../middlewares/withAdmin.js";
import clientController from "../controllers/clients.js";
const router = Router();

router.get("/:id", withUser, clientController.getClient);
router.get("/", clientController.getAllClient);
router.post("/", clientController.createClient);
router.put("/:id", clientController.updateClient);
router.delete("/:id", clientController.deleteClient);

export default router;
