import { Router } from "express";
import withUser from "../middlewares/withAdmin.js";
import superAdminController from "../controllers/super.js";
const router = Router();

router.get("/:id", withUser,superAdminController.getSuperAdmin);
router.get("/",withUser,superAdminController.getAllSuperAdmin);
router.post("/",superAdminController.createSuperAdmin);
router.post("/login",superAdminController.loginSuperAdmin);
router.put("/:id", withUser,superAdminController.editSuperAdmin);
router.delete("/:id", withUser,superAdminController.deleteSuperAdmin);

export default router;
