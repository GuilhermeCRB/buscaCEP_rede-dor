import axios from "axios";
import { jest } from "@jest/globals";

import {getAddress, isApiAddresError, isFormatedAddres} from "../../src/services/cepService";
import {createAddress, createFormatedAddress, createNotFoundError} from "../factories/addressFactory";
import cepFactory from "../factories/cepFactory";
import addressFactory from "../../src/factories/formatAddress";
import { notFoundError } from "../../src/utils/errorUtils";

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
})