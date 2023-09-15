import { Router } from "express";
import withUser from "../middlewares/withAdmin.js";
import superAdminController from "../controllers/super.js";
import AdminController from "../controllers/admin.js";
const router = Router();

// SuperAmdin --> /superAdmin
router.get("/:id", withUser, superAdminController.getSuperAdmin);
router.get("/", withUser, superAdminController.getAllSuperAdmin);
router.post("/", superAdminController.createSuperAdmin);
router.post("/login", superAdminController.loginSuperAdmin);
router.put("/:id", withUser, superAdminController.editSuperAdmin);
router.delete("/:id", withUser, superAdminController.deleteSuperAdmin);

//SuperAdmin -->  admin
router.post("/admin", withUser, AdminController.createAdmin);

export default router;
