import { Router } from "express";
import withUser from "../middlewares/withAdmin.js";
import clientController from "../controllers/clients.js";
const router = Router();

router.get("/:id", withUser, clientController.getClient);
router.get("/", withUser, clientController.getAllClient);
router.post("/", withUser, clientController.createClient);
router.put("/:id", withUser, clientController.updateClient);
router.delete("/:id", withUser, clientController.deleteClient);

export default router;
