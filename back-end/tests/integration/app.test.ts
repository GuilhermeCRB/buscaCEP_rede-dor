import supertest from "supertest";

import app from "../../src/app";
import cepFactory from "../factories/cepFactory";
import {isApiAddres, isApiAddresError} from "../../src/services/cepService";

describe("Gets address by CEP tests:", () => {
    it("Given a valid CEP, gets an address.", async () => {
        const validCep = cepFactory.createValidCep();
        const response = await supertest(app).get("/cep").send(validCep);

        expect(isApiAddres(response.body)).toBe(true);
        expect(response.statusCode).toBe(200);
    });

    it("Given an invalid CEP, throws a not found error (404).", async () => {
        const invalidCep = cepFactory.createInvalidCep();
        const response = await supertest(app).get("/cep").send(invalidCep);

        expect(isApiAddresError(response.body)).toBe(true);
        expect(response.statusCode).toBe(404);
    });

    it("Given a bad requested CEP, throws a bad resquest error (400).", async () => {
        const badRequestedCeps = cepFactory.createBadRequestedCep();

        await Promise.all(badRequestedCeps.map(async(badRequestedCep) => {
            const response = await supertest(app).get("/cep").send(badRequestedCep);
            expect(isApiAddresError(response.body)).toBe(true);
            expect(response.statusCode).toBe(400);
        }))
    });
});