import express, { Request, Response } from "express";
import { db } from "./utils/firebase_connection";

const PORT = 3030;
const app = express();
app.use(express.json());



// ROTAS HOUSE ////////////////////////////////////////////

app.get('/houses', async (req: Request, res: Response) => {
    const housesRef = db.collection('houses');
    const housesDoc = await housesRef.get();
    const houses: any = [];
    housesDoc.forEach(doc => houses.push({id: doc.id, ...doc.data()}));

    return res.status(200).json(houses);
});


app.post('/houses/create', async (req: Request, res: Response) => {
    const {number, 
        description, 
        lat_waypoints, 
        lng_waypoints} = req.body;

    const house = {
        number, 
        description, 
        lat_waypoints, 
        lng_waypoints
    };

    const result = await db.collection('houses').add(house);

    return res.status(201).json({id: result.id});
});


app.get('/houses/:id', async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        const house = await db.collection('houses').doc(id).get();
        return res.status(200).json({id: house.id, ...house.data()});
    } 
    catch (e) {
        return res.status(404).json({message: "O id informado não existe!"});
    }
});


app.put('/houses/update/:id', async (req: Request, res: Response) => {
    const {id} = req.params;

    const {number, 
        description, 
        lat_waypoints, 
        lng_waypoints} = req.body;

    const house = {
        number, 
        description, 
        lat_waypoints, 
        lng_waypoints
    };

    try {
        const result = await db.collection('houses').doc(id).update(house);
        return res.status(200).json({...result});
    } 
    catch (e) {
        return res.status(404).json({message: "O id informado não existe!"});
    }
});


app.delete('/houses/delete/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    
    try {
        const result = await db.collection('houses').doc(id).delete();
        return res.status(200).json({...result});
    } 
    catch (e) {
        return res.status(404).json({message: "O id informado não existe!"});
    }
});


//////////////////////////////////////////////////////////////////////////////

app.get('/residents', async (req: Request, res: Response) => {
    const residentsRef = db.collection('users');
    const residentsDoc = await residentsRef.where('category', '==', 2).get();
    const residents: any = [];
    residentsDoc.forEach(doc => residents.push({id: doc.id, ...doc.data()}));

    return res.status(200).json(residents);
});


app.post('/residents/create', async (req: Request, res: Response) => {
    const {name, 
        email, 
        phone,
        password,
        id_house} = req.body;

    const resident = {
        name, 
        email, 
        phone,
        password, 
        id_house,
        category: Number(2)
    };

    const result = await db.collection('users').add(resident);

    return res.status(201).json({id: result.id});
});


app.get('/residents/:id', async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        const resident = await db.collection('users').doc(id).get();
        return res.status(200).json({id: resident.id, ...resident.data()});
    } 
    catch (e) {
        return res.status(404).json({message: "O id informado não existe!"});
    }
});


app.put('/residents/update/:id', async (req: Request, res: Response) => {
    const {id} = req.params;

    const {name, 
        email, 
        phone,
        password, 
        id_house} = req.body;

    const resident = {
        name, 
        email, 
        phone,
        password, 
        id_house
    };

    try {
        const result = await db.collection('users').doc(id).update(resident);
        return res.status(200).json({...result});
    } 
    catch (e) {
        return res.status(404).json({message: "O id informado não existe!"});
    }
});


app.delete('/residents/delete/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    
    try {
        const result = await db.collection('users').doc(id).delete();
        return res.status(200).json({...result});
    } 
    catch (e) {
        return res.status(404).json({message: "O id informado não existe!"});
    }
});


/////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////


app.get('/employees', async (req: Request, res: Response) => {
    const employeesRef = db.collection('users');
    const employeesDoc = await employeesRef.where('category', '==', 1).get();
    const employees: any = [];
    employeesDoc.forEach(doc => employees.push({id: doc.id, ...doc.data()}));

    return res.status(200).json(employees);
});


app.post('/employees/create', async (req: Request, res: Response) => {
    const {name, 
        email, 
        phone,
        password,
        category
    } = req.body;

    const employee = {
        name, 
        email, 
        phone,
        password, 
        category: Number(category)
    };

    const result = await db.collection('users').add(employee);

    return res.status(201).json({id: result.id});
});


app.get('/employees/:id', async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        const employee = await db.collection('users').doc(id).get();
        return res.status(200).json({id: employee.id, ...employee.data()});
    } 
    catch (e) {
        return res.status(404).json({message: "O id informado não existe!"});
    }
});


app.put('/employees/update/:id', async (req: Request, res: Response) => {
    const {id} = req.params;

    const {name, 
        email, 
        phone,
        password} = req.body;

    const employee = {
        name, 
        email, 
        phone,
        password
    };

    try {
        const result = await db.collection('users').doc(id).update(employee);
        return res.status(200).json({...result});
    } 
    catch (e) {
        return res.status(404).json({message: "O id informado não existe!"});
    }
});


app.delete('/employees/delete/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    
    try {
        const result = await db.collection('users').doc(id).delete();
        return res.status(200).json({...result});
    } 
    catch (e) {
        return res.status(404).json({message: "O id informado não existe!"});
    }
});

/////////////////////////////////////////////////////////////

app.get('/deliveries/accepted', async (req: Request, res: Response) => {
    const deliveriesRef = db.collection('deliveries');
    const deliveriesDoc = await deliveriesRef.where('accepted', '==', true).get();

    const deliveries: any = [];
    const _deliveries: any = [];

    deliveriesDoc.forEach(doc => deliveries.push({id: doc.id,...doc.data()}));

    deliveries.forEach(doc => _deliveries.push({
        id: doc.id, 
        description: doc.description,
        sender: doc.sender,
        id_resident: doc.id_resident,
        id_employee: doc.id_employee,
        date_condo_reception: doc.date_condo_reception, // number
        accepted: doc.accepted, 
        date_accepted: doc.date_accepted,
    }));

    return res.status(200).json(_deliveries);
});


app.get('/deliveries/accepted/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    // date_accepted: delivery.data().date_accepted.toDate().toLocaleString()

    try {
        const delivery = await db.collection('deliveries').doc(id).get();
        return res.status(200).json(
            {
                id: delivery.id, 
                date_accepted: delivery.data()
                    .date_accepted.toDate()
                    .toLocaleString(),
                date_condo_reception: delivery.data()
                    .date_condo_reception.toDate()
                    .toLocaleString(),
                // ...delivery.data(),
            }
        );
    } 
    catch (e) {
        return res.status(404).json({message: "O id informado não existe!"});
    }
});


// ------------------------
app.get('/deliveries/resident/:id', async (req: Request, res: Response) => {
    const {id} = req.params;

    const deliveriesRef = db.collection('deliveries');
    const deliveriesDoc = await deliveriesRef.where('id_resident', '==', id).get();
    const deliveries: any = [];
    deliveriesDoc.forEach(doc => deliveries.push({id: doc.id, ...doc.data()}));

    return res.status(200).json(deliveries);
});

// Obter Todas as Entregas
app.get('/deliveries', async (req: Request, res: Response) => {
    const deliveriesRef = db.collection('deliveries');
    const deliveriesDoc = await deliveriesRef.get();
    const deliveries: any = [];
    deliveriesDoc.forEach(doc => deliveries.push({id: doc.id, ...doc.data()}));

    return res.status(200).json(deliveries);
});


// Obter uma Entrega
app.get('/deliveries/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    // date_accepted: delivery.data().date_accepted.toDate().toLocaleString()
    // /deliveries/resident/:idResident/:idDelivery --> Nome da rota?

    try {
        const delivery = await db.collection('deliveries').doc(id).get();
        return res.status(200).json(
            {
                id: delivery.id, 
                date_accepted: delivery.data()
                    .date_accepted.toDate()
                    .toLocaleString(),
                date_condo_reception: delivery.data()
                    .date_condo_reception.toDate()
                    .toLocaleString(),
                ...delivery.data(),
            }
        );
    } 
    catch (e) {
        return res.status(404).json({message: "O id informado não existe!"});
    }
});


app.post('/deliveries/create', async (req: Request, res: Response) => {
    const {description, 
        sender, 
        id_resident,
        id_employee,
        accepted,
        date_condo_reception,
        date_accepted
    } = req.body;

    const delivery = {
        description, 
        sender, 
        id_resident,
        id_employee,
        accepted, 
        date_condo_reception,
        date_accepted, 
    };

    const result = await db.collection('deliveries').add(delivery);

    return res.status(201).json({id: result.id});
});


app.put('/deliveries/update/:id', async (req: Request, res: Response) => {
    
});


app.delete('/deliveries/delete/:id', async (req: Request, res: Response) => {
    const {id} = req.params;
    
    try {
        const result = await db.collection('deliveries').doc(id).delete();
        return res.status(200).json({...result});
    } 
    catch (e) {
        return res.status(404).json({message: "O id informado não existe!"});
    }
});

















app.listen(PORT, () => {
    console.log(`App running in port ${PORT}...`);
});

