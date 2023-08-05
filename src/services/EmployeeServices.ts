import { db } from "../utils/firebase_connection";


export const QueryListOfEmployee = async () => {
    const employeesRef = db.collection('users');
    const employeesDoc = await employeesRef.where('category', '==', 1).get();
    const employees: any = [];
    employeesDoc.forEach(doc => employees.push({id: doc.id, ...doc.data()}));

    return employees;
}


export const QueryEmployeeById = async (id: string) => {
    const employee = await db.collection('users').doc(id).get();
    return {id: employee.id, ...employee.data()};
}


export const CreateNewEmployee = async (employee: any) => {
    const result = await db.collection('users').add(employee);
    return result.id;
}


export const UpdateEmployeeById = async (id: string, employee: any) => {
    const result = await db.collection('users').doc(id).update(employee);
    return result;
}


export const DeleteEmployeeById = async (id: string) => {
    const result = await db.collection('users').doc(id).delete();
    return result;
}

