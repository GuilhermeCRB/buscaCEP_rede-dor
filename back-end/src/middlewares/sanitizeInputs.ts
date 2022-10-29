import { Request, Response, NextFunction } from "express";
import { stripHtml } from "string-strip-html";

export function sanitizeInputs() {
    return (req: Request, res: Response, next: NextFunction) => {
        const {cep} = req.params;
        const sanitizedCep = stripHtml(cep).result;

        res.locals.data = {cep: sanitizedCep};

        next();
    }
}
