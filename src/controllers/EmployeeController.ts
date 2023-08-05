import { Request, Response } from "express";

import { 
    QueryListOfEmployee, 
    QueryEmployeeById, 
    CreateNewEmployee, 
    UpdateEmployeeById, 
    DeleteEmployeeById } from "../services/EmployeeServices";


export const GetAllEmployees = async (req: Request, res: Response) => {
    try {
        const employeesList = await QueryListOfEmployee();
        return res.status(200).json(employeesList);
    } 
    catch (e) {
        return res.status(500).json();
    }
}


export const GetEmployee = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const employee = await QueryEmployeeById(id);
        return res.status(200).json(employee);
    } 
    catch {
        return res.status(404).json();
    }
}


export const CreateEmployee = async (req: Request, res: Response) => {
    const employee = {
        name: req.body.name, 
        email: req.body.email, 
        phone: req.body.phone,
        password: req.body.password, 
        category: req.body.category
    };

    try {
        const result = await CreateNewEmployee(employee);
        return res.status(201).json(result);
    } 
    catch (e) {
        return res.status(400).json();
    }
}


export const UpdateEmployee = (req: Request, res: Response) => {
    const id = req.params.id;

    const employee = {
        name: req.body.name, 
        email: req.body.email, 
        phone: req.body.phone,
        password: req.body.password, 
    };

    try {
        const result = UpdateEmployeeById(id, employee);
        return res.status(200).json(result);
    } 
    catch (e) {
        return res.status(400).json();
    }
}


export const DeleteEmployee = (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const result = DeleteEmployeeById(id);
        return res.status(200).json(result);
    } 
    catch (e) {
        return res.status(404).json();
    }
}
