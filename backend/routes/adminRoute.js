import { Router } from "express";
import withUser from "../middlewares/withAdmin.js";
import AdminController from "../controllers/admin.js";
const router = Router();

router.get("/:id", withUser, AdminController.getAdmin);
router.get("/", withUser, AdminController.getAllAdmin);
router.post("/", withUser, AdminController.createAdmin);
router.post("/login", AdminController.loginAdmin);
router.put("/:id", withUser, AdminController.editAdmin);
router.delete('/:id', withUser, AdminController.deleteAdmin)
export default router;
