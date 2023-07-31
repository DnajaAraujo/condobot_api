import express from "express";
// import { GetAllHouses, GetHouse, UpdateHouse, DeleteHouse } from "./../controllers/House";

const router = express.Router();

const routeBase = '/deliveries';

// TO DO
//      OBTER ENTREGAS ACEITAS
//      
// 

router.get(routeBase);
router.get(routeBase + '/:id');
router.post(routeBase + '/create');
router.put(routeBase + '/update/:id');
router.delete(routeBase + '/delete/:id');


export { router as DeliveryRouter } ;