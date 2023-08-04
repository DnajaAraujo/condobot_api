import { Request, Response } from "express";

import { 
    QueryListOfHouse, 
    QueryHouseById,
    CreateNewHouse, 
    UpdateHouseById,
    DeleteHouseById } from "../services/HouseServices";


export const GetAllHouses = async (req: Request, res: Response) => {
    try {
        const houseList = await QueryListOfHouse();
        return res.status(200).json(houseList);
    } 
    catch (e) {
        return res.status(500).json();
    }
}


export const GetHouse = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const house = await QueryHouseById(id);
        return res.status(200).json(house);
    }
    catch(e) {
        return res.status(404).json();
    }
}


export const CreateHouse = async (req: Request, res: Response) => {
    const house = {
        number: req.body.number,
        description: req.body.description, 
        lat_waypoints: req.body.lat_waypoints, 
        lng_waypoints: req.body.lng_waypoints
    };

    try {
        const result = await CreateNewHouse(house);
        return res.status(201).json(result);
    } 
    catch(e) {
        return res.status(404).json();
    }
}


export const UpdateHouse = async (req: Request, res: Response) => {
    const id = req.params.id;

    const house = {
        number: req.body.number,
        description: req.body.description, 
        lat_waypoints: req.body.lat_waypoints, 
        lng_waypoints: req.body.lng_waypoints
    };

    try {
        const result = await UpdateHouseById(id, house);
        return res.status(200).json(result);
    } 
    catch (e) {
        return res.status(404).json();
    }
}


export const DeleteHouse = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const result = await DeleteHouseById(id);
        return res.status(200).json(result);
    } 
    catch (e) {
        return res.status(404).json();
    }
}

