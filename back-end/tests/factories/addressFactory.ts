import { faker } from "@faker-js/faker";

export function createAddress(validCep: string){
    return {
        status: 200,
        ok: true,
        code: validCep,
        state: faker.address.state(),
        city: faker.address.city(),
        district: faker.address.cityName(),
        address: faker.address.streetAddress(),
        statusText: faker.animal.bird()
    }
}

export function createFormatedAddress(validCep: string){
    return {
        status: 200,
        code: validCep,
        state: faker.address.state(),
        city: faker.address.city(),
        district: faker.address.cityName(),
        address: faker.address.streetAddress(),
    }
}