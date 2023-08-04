import express from "express";
const router = express.Router();

import { 
    GetAllResidents, 
    GetResident, 
    CreateResident, 
    UpdateResident, 
    DeleteResident } from "../controllers/ResidentController";


router.get('/', GetAllResidents); 
router.get('/:id', GetResident);
router.post('/create', CreateResident);
router.put('/update/:id', UpdateResident);
router.delete('/delete/:id', DeleteResident);


export { router as ResidentRouter };