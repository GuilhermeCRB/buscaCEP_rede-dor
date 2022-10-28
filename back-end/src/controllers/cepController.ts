import { Request, Response } from "express";

import { getAddress } from "../services/cepService.js";

export async function findCep(req: Request, res: Response){
    const cep : string = res.locals.data.cep;
    const address = await getAddress(cep);
    res.status(200).send(address);
}