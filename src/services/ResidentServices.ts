import { db } from "../utils/firebase_connection";


export const QueryListOfResident = async () => {
    const residentsRef = db.collection('users');
    const residentsDoc = await residentsRef.where('category', '==', 2).get();
    const residents: any = [];
    residentsDoc.forEach(doc => residents.push({id: doc.id, ...doc.data()}));

    return residents;
}


export const QueryResidentById = async (id: string) => {
    const resident = await db.collection('users').doc(id).get();
    return {id: resident.id, ...resident.data()};
}


export const CreateNewResident = async (resident: any) => {
    const result = await db.collection('users').add(resident);
    return result;
}


export const UpdateResidentById = async (id: string, resident: any) => {
    const result = await db.collection('users').doc(id).update(resident);
    return result;
}


export const DeleteResidentById = async (id: string) => {
    const result = await db.collection('users').doc(id).delete();
    return result;
}

