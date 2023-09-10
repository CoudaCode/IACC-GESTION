import projetController from "../controllers/projet.js";
import upload from "../middlewares/multer.js";
import { Router } from "express";

const  projetRouter = Router()


 projetRouter.get('/:id', projetController.getprojetbyId)
 projetRouter.get('/', projetController.getprojet)
 projetRouter.post('/', upload.single('image'), projetController.createprojet)
 projetRouter.put('/:id', upload.single('image'), projetController.updateprojet)
 projetRouter.delete('/:id', projetController.deleteprojet)

export default  projetRouter