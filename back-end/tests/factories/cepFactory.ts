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


const cepFactory = {
    createValidCep,
    createInvalidCep
};

export default cepFactory;