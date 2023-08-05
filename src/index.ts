import express from "express";
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());

import { EmployeeRouter } from "./routes/EmployeeRoutes";
import { ResidentRouter } from "./routes/ResidentRoutes";
import { HouseRouter } from "./routes/HouseRoutes";
import { DeliveryRouter } from "./routes/DeliveryRoutes";


const employeeRoute = EmployeeRouter;
const residentRoute = ResidentRouter;
const houseRoute = HouseRouter;
const deliveryRoute = DeliveryRouter;

app.use('/employees', employeeRoute);
app.use('/residents', residentRoute);
app.use('/houses', houseRoute);
app.use('/deliveries', deliveryRoute);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});

