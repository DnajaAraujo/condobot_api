import express, { Request, Response } from "express";

const PORT = 3030;

const app = express();
app.use(express.json());


// ROTAS:
//      HOUSES:
//          get-Houses (200)
//          post-House (201)
//          get-House (200)
//          put-House (200)
//          delete-House (200)


app.get('/houses', (req: Request, res: Response) => {
    return res.status(200).json([]);
});


app.post('/houses', (req: Request, res: Response) => {
    const {id, number, description, 
        lat_waypoints, lng_waypoints} = req.body;

    return res.status(201)
        .json({number, description, 
        lat_waypoints, lng_waypoints});

});


app.get('/houses/:id', (req: Request, res: Response) => {
    const {id} = req.params;

    const house = {
        id,
        number: "100",
        description: "Quadra 01",
        lat_waypoints: "100 220 3430 1020",
        lng_waypoints: "1020 3430 220 100"
    }

    return res.status(200).json(house);
});


app.put('/houses/:id', (req: Request, res: Response) => {
    const {id} = req.params;

    return res.status(200).json(id);
});


app.delete('/houses/:id', (req: Request, res: Response) => {
    const {id} = req.params;

    return res.status(200).json(id);
});






app.listen(PORT, () => {
    console.log(`App running in port ${PORT}...`);
});

