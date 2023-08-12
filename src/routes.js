import { Router } from "express";
import ClienteController from "./app/controllers/ClienteController.js";

const router = Router()

router.get('/clientes', ClienteController.index)
router.get('/clientes/:id', ClienteController.show)
router.post('/clientes', ClienteController.store)
router.delete('/clientes/:id', ClienteController.delete)
router.put('/clientes/:id', ClienteController.update)

export default router