import {Router} from "express";

import { findCep } from "../controllers/cepController.js";
import { sanitizeInputs } from "../middlewares/sanitizeInputs.js";
import { cepProperties } from "../schemas/cepSchema.js";

const cep = Router();

cep.get("/cep", sanitizeInputs(cepProperties), findCep);

export default cep;