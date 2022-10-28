import axios from "axios";
import { jest } from "@jest/globals";

import {getAddress, isFormatedAddres} from "../../src/services/cepService";
import {createAddress, createBadRequestError, createFormatedAddress, createNotFoundError} from "../factories/addressFactory";
import cepFactory from "../factories/cepFactory";
import addressFactory from "../../src/factories/formatAddress";

describe("CEP service unit test", () => {
    it("Returns an address, given a valid CEP.", async() => {
        const validCep = cepFactory.createValidCep();
        const addressResponse = createAddress(validCep.cep);
        const formatedAddress = createFormatedAddress(validCep.cep);

        jest.spyOn(addressFactory, "formatAddress").mockImplementationOnce((): any => formatedAddress);

        const mockGet = jest.spyOn(axios, "get");
        mockGet.mockImplementation(() => Promise.resolve({data: addressResponse}));

        const address = await getAddress(validCep.cep);
        expect(isFormatedAddres(address)).toBe(true);
    })

    it("Throws a not found error, if CEP is invalid.", async() => {
        const invalidCep = cepFactory.createInvalidCep();
        const mockedError = createNotFoundError();
        
        const mockGet = jest.spyOn(axios, "get");
        mockGet.mockImplementation(() => Promise.resolve({data: mockedError}));

        try{
           await getAddress(invalidCep.cep);
        }catch(error){
            expect(error).toEqual({type: 'not_found', message: 'CEP não encontrado'});
        }
    })

    it("Throws a bad request error, given a wrong CEP pattern.", async() => {
        const badRequestedCeps = cepFactory.createBadRequestedCep();
        const mockedError = createBadRequestError();
        
        const mockGet = jest.spyOn(axios, "get");
        mockGet.mockImplementation(() => Promise.resolve({data: mockedError}));

        try{
            await Promise.all(badRequestedCeps.map(async(badRequestedCep) => {
                await getAddress(badRequestedCep.cep);
            }))
        }catch(error){
            expect(error).toEqual({type: 'bad_request', message: 'Bad Request'});
        }
    })
})