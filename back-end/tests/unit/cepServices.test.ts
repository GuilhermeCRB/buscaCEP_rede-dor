import axios from "axios";
import { jest } from "@jest/globals";

import {getAddress, isFormatedAddres} from "../../src/services/cepService";
import {createAddress, createFormatedAddress} from "../factories/addressFactory";
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
})