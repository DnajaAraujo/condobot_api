import express from "express";
const router = express.Router();

import { 
    GetAllDeliveries, 
    GetAllAcceptedDeliveries, 
    GetDelivery, 
    CreateDelivery, 
    UpdateDelivery,
    DeleteDelivery } from "../controllers/DeliveryController";


router.get('', GetAllDeliveries);
router.get('/accepted', GetAllAcceptedDeliveries);
router.get('/:id', GetDelivery);
router.post('/create', CreateDelivery);
router.put('/update/:id', UpdateDelivery);
router.delete('/delete/:id', DeleteDelivery);


export { router as DeliveryRouter };