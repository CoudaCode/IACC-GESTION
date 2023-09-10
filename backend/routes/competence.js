import competenceController from "../controllers/competence.js";

import { Router } from "express";

const  competenceRouter = Router()


 competenceRouter.get('/:id', competenceController.getCompetenceById)
 competenceRouter.get('/', competenceController.getcompetence)
 competenceRouter.post('/', competenceController.createCompetence)
 competenceRouter.put('/:id', competenceController.editCompetence)
 competenceRouter.delete('/:id', competenceController.deleteCompetence)

export default  competenceRouter