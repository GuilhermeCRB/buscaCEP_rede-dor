import {Router} from "express";

import { findCep } from "../controllers/cepController.js";

const cep = Router();

cep.get("/cep", findCep);

export default cep;