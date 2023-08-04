import { Request, Response } from "express";

import { 
    QueryListOfResident, 
    QueryResidentById, 
    CreateNewResident, 
    UpdateResidentById, 
    DeleteResidentById } from "../services/ResidentServices";


export const GetAllResidents = async (req: Request, res: Response) => {
    try {
        const residentsList = await QueryListOfResident();
        return res.status(200).json(residentsList);
    } 
    catch (e) {
        return res.status(500).json();
    }
}


export const GetResident = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const resident = await QueryResidentById(id);
        return res.status(200).json(resident);
    } 
    catch {
        return res.status(404).json();
    }
}


export const CreateResident = async (req: Request, res: Response) => {
    const resident = {
        name: req.body.name, 
        email: req.body.email, 
        phone: req.body.phone,
        password: req.body.password, 
        id_house: req.body.id_house,
        category: req.body.category
    };

    try {
        const result = await CreateNewResident(resident);
        return res.status(201).json(result);
    } 
    catch (e) {
        return res.status(404).json();
    }
}


export const UpdateResident = (req: Request, res: Response) => {
    const id = req.params.id;

    const resident = {
        name: req.body.name, 
        email: req.body.email, 
        phone: req.body.phone,
        password: req.body.password, 
        id_house: req.body.id_house,
    };

    try {
        const result = UpdateResidentById(id, resident);
        return res.status(200).json(result);
    } 
    catch (e) {
        return res.status(404).json();
    }
}


export const DeleteResident = (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const result = DeleteResidentById(id);
        return res.status(200).json(result);
    } 
    catch (e) {
        return res.status(404).json();
    }
}
