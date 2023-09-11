import { Router } from "express";
import withUser from "../middlewares/withUser.js";
import AdminController from "../controllers/admin.js";
const router = Router();

router.get("/:id", withUser, AdminController.getAdmin);
router.get("/", AdminController.getAllAdmin);
router.post("/", AdminController.createAdmin);
router.put("/:id", AdminController.editAdmin);
router.delete("/:id", withUser, AdminController.deleteAdmin);

export default router;
