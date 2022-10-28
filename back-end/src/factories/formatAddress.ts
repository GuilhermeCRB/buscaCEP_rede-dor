import { ApiAddress, FormatedAddress } from "../services/cepService.js";

function formatAddress(address: ApiAddress){
    delete address.ok; delete address.statusText;
    const formatedAddress: FormatedAddress = {...address, code: address.code.replace("-", "")}
    return formatedAddress;
}

const addresFactory = {
    formatAddress
};

export default addresFactory;