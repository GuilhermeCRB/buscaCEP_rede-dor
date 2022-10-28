import supertest from "supertest";

import app from "../src/app";
import cepFactory from "./factories/cepFactory";
import {isApiAddres} from "../src/services/cepService";

describe("Gets address by CEP tests:", () => {
    it("Given a valid CEP, gets an address.", async () => {
        const validCep = cepFactory.createValidCep();
        const response = await supertest(app).get("/cep").send(validCep);

        expect(isApiAddres(response.body)).toBe(true);
        expect(response.statusCode).toBe(200);
    });
});