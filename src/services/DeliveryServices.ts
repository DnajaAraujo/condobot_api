import { db } from "../utils/firebase_connection";


export const QueryListOfDelivery = async () => {
    const deliveriesRef = db.collection('deliveries');
    const deliveriesDoc = await deliveriesRef.get();
    const deliveries: any = [];
    deliveriesDoc.forEach(doc => deliveries.push({id: doc.id, ...doc.data()}));

    return deliveries;
}


export const QueryListOfAcceptedDelivery = async () => {
    const deliveriesRef = db.collection('deliveries');
    const deliveriesDoc = await deliveriesRef.where('accepted', '==', true).get();

    const _deliveries: any = [];
    const deliveries: any = [];

    deliveriesDoc.forEach(doc => _deliveries.push({id: doc.id,...doc.data()}));

    _deliveries.forEach(doc => deliveries.push({
        id: doc.id, 
        description: doc.description,
        sender: doc.sender,
        id_resident: doc.id_resident,
        id_employee: doc.id_employee,
        date_condo_reception: doc.date_condo_reception, // number
        accepted: doc.accepted, 
        date_accepted: doc.date_accepted,
    }));

    return deliveries;
}


export const QueryDeliveryById = async (id: string) => {
    const delivery = await db.collection('deliveries').doc(id).get();
    return {id: delivery.id, ...delivery.data()};
}


export const CreateNewDelivery = async (delivery: any) => {
    const result = await db.collection('deliveries').add(delivery);
    return {id: result.id};
}


export const UpdateDeliveryById = async (id: string, delivery: any) => {
    const result = await db.collection('deliveries').doc(id).update(delivery);
    return result;
}


export const DeleteDeliveryById = async (id: string) => {
    const result = await db.collection('deliveries').doc(id).delete();
    return result;
}

