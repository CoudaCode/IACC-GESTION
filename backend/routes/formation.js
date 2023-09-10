import formationController from "../controllers/formation.js"
import { Router } from "express";

const  formationRouter = Router()


 formationRouter.get('/:id', formationController.getFormationById)
 formationRouter.get('/', formationController.getFormation)
 formationRouter.post('/', formationController.createFormation)
 formationRouter.put('/:id', formationController.editFormation)
 formationRouter.delete('/:id', formationController.deleteFormation)

export default  formationRouter