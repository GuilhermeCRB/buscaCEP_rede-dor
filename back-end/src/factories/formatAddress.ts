import { ApiAddress } from "../services/cepService.js";

export default function formatAddress(address: ApiAddress){
    delete address.ok; delete address.statusText;
    address.code = address.code.replace("-", "");
    return address;
}