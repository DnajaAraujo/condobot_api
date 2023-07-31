import express from "express";
// import { GetAllHouses, GetHouse, UpdateHouse, DeleteHouse } from "./../controllers/House";

const router = express.Router();

const routeBase = '/residents';

router.get(routeBase);
router.get(routeBase + '/:id');
router.post(routeBase + '/create');
router.put(routeBase + '/update/:id');
router.delete(routeBase + '/delete/:id');


export { router as ResidentRouter } ;