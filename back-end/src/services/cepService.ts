import axios from "axios";

import formatAddress from "../factories/formatAddress.js";
import { notFoundError } from "../utils/errorUtils.js";

export type ApiAddress = {
    status: number,
    ok: boolean,
    code: string,
    state: string,
    city: string,
    district: string,
    address: string,
    statusText: string
}

type ApiAddressError = Omit<
    ApiAddress & {message: string}, 'code' | 'state' | 'city' | 'district' | 'address'
>;

type Address = Omit<ApiAddress, 'ok' | 'statusText'>;

export async function getAddress(cep: string) {
    const cepApiURL = `https://ws.apicep.com/cep.json?code=${cep}`;
    const {data} = await axios.get(cepApiURL);

    if(!data.ok) {
        const error: ApiAddressError = data;
        if(data.status === 404) throw notFoundError(data.message);
    }
    
    const address: ApiAddress = data;
    const formatedAddress: Address = formatAddress(address);
    return formatedAddress;
}