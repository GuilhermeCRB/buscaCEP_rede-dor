import { faker } from "@faker-js/faker";

function createValidCep() {
    return {
        cep: "27320001"
    }
}

function createInvalidCep() {
    return {
        cep: "00000000"
    }
}

function createBadRequestedCep() {
    return  [
        {
            cep: faker.random.alphaNumeric(8)
        },
        {
            cep: faker.random.numeric(9)
        },
        {
            cep: faker.random.numeric(7)
        }
    ];
}

const cepFactory = {
    createValidCep,
    createInvalidCep,
    createBadRequestedCep
};

export default cepFactory;