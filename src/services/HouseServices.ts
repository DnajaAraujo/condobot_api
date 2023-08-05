import { db } from "../utils/firebase_connection";


export const QueryListOfHouse = async () => {
    const housesRef = db.collection('houses');
    const housesDoc = await housesRef.get();
    const houses: any = [];
    housesDoc.forEach(doc => houses.push({id: doc.id, ...doc.data()}));

    return houses;
}


export const QueryHouseById = async (id: string) => {
    const house = await db.collection('houses').doc(id).get();
    return {id: house.id, ...house.data()};
}


export const CreateNewHouse = async (house: any) => {
    const result = await db.collection('houses').add(house);
    return {id: result.id};
}


export const UpdateHouseById = async (id: string, house: any) => {
    const result = await db.collection('houses').doc(id).update(house);
    return result;
}


export const DeleteHouseById = async (id: string) => {
    const result = await db.collection('houses').doc(id).delete();
    return result;
}
