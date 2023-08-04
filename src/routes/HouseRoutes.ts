import express from "express";
const router = express.Router();

import { 
    GetAllHouses, 
    GetHouse, 
    CreateHouse,
    UpdateHouse, 
    DeleteHouse } from "./../controllers/HouseController";


router.get('/', GetAllHouses);
router.get('/:id', GetHouse);
router.post('/create', CreateHouse);
router.put('/update/:id', UpdateHouse);
router.delete('/delete/:id', DeleteHouse);


export { router as HouseRouter };