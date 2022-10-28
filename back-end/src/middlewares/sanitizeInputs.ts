import { Request, Response, NextFunction } from "express";
import { stripHtml } from "string-strip-html";

export function sanitizeInputs(properties: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        const object = req.body;
        const sanitizedObject = {};

        properties.forEach(propertie => {
            if (object[propertie]) {
                sanitizedObject[propertie] = stripHtml(object[propertie]).result;
            }
        });

        res.locals.data = sanitizedObject;

        next();
    }
}
