import {Router} from "express";

import cep from "./cepRouter.js";

const router = Router();

router.use(cep);

export default router;