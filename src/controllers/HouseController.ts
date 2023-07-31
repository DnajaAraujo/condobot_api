

import { QueryListOfHouse } from "../services/HouseServices";

export const GetAllHouses = (req: Request, res: Response) => {
    const houseList = QueryListOfHouse();
    return res.json(houseList);
}

export const GetHouse = (req: Request, res: Response) => {
    
}

export const CreateHouse = (req: Request, res: Response) => {

}

export const UpdateHouse = (req: Request, res: Response) => {

}

export const DeleteHouse = (req: Request, res: Response) => {

}

