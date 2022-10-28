import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

import { badRequestError } from "../utils/errorUtils.js";

export function validateSchema(schema: Schema, errorMessage: string) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(res.locals.data, { abortEarly: false });
        if (error) {
            throw badRequestError(errorMessage);
        }

        next();
    }
};