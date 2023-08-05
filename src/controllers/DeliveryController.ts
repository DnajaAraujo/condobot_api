import { Request, Response } from "express";

import { 
    QueryListOfDelivery, 
    QueryListOfAcceptedDelivery,
    QueryDeliveryById, 
    CreateNewDelivery, 
    UpdateDeliveryById, 
    DeleteDeliveryById } from "../services/DeliveryServices";


export const GetAllDeliveries = async (req: Request, res: Response) => {
    try {
        const deliveriesList = await QueryListOfDelivery();
        return res.status(200).json(deliveriesList);
    } 
    catch (e) {
        return res.status(500).json();
    }
}


export const GetAllAcceptedDeliveries = async (req: Request, res: Response) => {
    try {
        const deliveriesList = await QueryListOfAcceptedDelivery();
        return res.status(200).json(deliveriesList);
    } 
    catch (e) {
        return res.status(500).json();
    }
}


export const GetDelivery = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const delivery = await QueryDeliveryById(id);
        return res.status(200).json(delivery);
    } 
    catch {
        return res.status(404).json();
    }
}


export const CreateDelivery = async (req: Request, res: Response) => {
    const delivery = {
        description: req.body.description, 
        sender: req.body.sender, 
        id_resident: req.body.id_resident,
        id_employee: req.body.id_employee,
        date_condo_reception: req.body.date_condo_reception,
        accepted: req.body.accepted, 
        date_accepted: req.body.date_accepted
    };

    try {
        const result = await CreateNewDelivery(delivery);
        return res.status(201).json(result);
    } 
    catch (e) {
        return res.status(400).json();
    }
}


export const UpdateDelivery = (req: Request, res: Response) => {
    const id = req.params.id;

    const delivery = {
        description: req.body.description, 
        sender: req.body.sender, 
        id_resident: req.body.id_resident,
        id_employee: req.body.id_employee,
        date_condo_reception: req.body.date_condo_reception,
        accepted: req.body.accepted, 
        date_accepted: req.body.date_accepted
    };

    try {
        const result = UpdateDeliveryById(id, delivery);
        return res.status(200).json();
    } 
    catch (e) {
        return res.status(400).json();
    }
}


export const DeleteDelivery = (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const result = DeleteDeliveryById(id);
        return res.status(200).json();
    } 
    catch (e) {
        return res.status(404).json();
    }
}

