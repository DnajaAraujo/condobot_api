import express from "express";
const router = express.Router();

import { 
    GetAllEmployees, 
    GetEmployee, 
    CreateEmployee, 
    UpdateEmployee,
    DeleteEmployee } from "../controllers/EmployeeController";


router.get('/', GetAllEmployees);
router.get('/:id', GetEmployee);
router.post('/create', CreateEmployee);
router.put('/update/:id', UpdateEmployee);
router.delete('/delete/:id', DeleteEmployee);


export { router as EmployeeRouter };