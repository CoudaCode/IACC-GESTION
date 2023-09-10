import experienceController from "../controllers/experience.js";
import { Router } from "express";

const  experienceRouter = Router()


 experienceRouter.get('/:id', experienceController.getExperienceById)
 experienceRouter.get('/', experienceController.getExperience)
 experienceRouter.post('/', experienceController.createExperience)
 experienceRouter.put('/:id', experienceController.editExperience)
 experienceRouter.delete('/:id', experienceController.deleteExperience)

export default  experienceRouter