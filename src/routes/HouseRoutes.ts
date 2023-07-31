import express from "express";
import { GetAllHouses, GetHouse, UpdateHouse, DeleteHouse } from "./../controllers/HouseController";

const router = express.Router();

const routeBase = '/houses';

router.get(routeBase, GetAllHouses);
router.get(routeBase + '/:id',);
router.post(routeBase + '/create',);
router.put(routeBase + '/update/:id',);
router.delete(routeBase + '/delete/:id',);


export { router as HouseRouter } ;