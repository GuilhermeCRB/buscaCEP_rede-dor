import {Router} from "express";

import { findCep } from "../controllers/cepController.js";
import { sanitizeInputs } from "../middlewares/sanitizeInputs.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { cepProperties, cepSchema, cepErrorMessage } from "../schemas/cepSchema.js";

const cep = Router();

cep.get("/cep", sanitizeInputs(cepProperties), validateSchema(cepSchema, cepErrorMessage), findCep);

export default cep;