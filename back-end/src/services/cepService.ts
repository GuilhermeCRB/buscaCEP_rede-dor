import axios from "axios";

import formatAddress from "../factories/formatAddress.js";
import { badRequestError, notFoundError } from "../utils/errorUtils.js";

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

type FormatedAddress = Omit<ApiAddress, 'ok' | 'statusText'>;

type AddressResponse = ApiAddress | ApiAddressError;

export const isApiAddres = (a: AddressResponse): a is ApiAddress => a.status === 200;
export const isApiAddresError = (e: ApiAddressError): e is ApiAddressError => e.status !== 200;

export async function getAddress(cep: string) {
    const cepApiURL = `https://ws.apicep.com/cep.json?code=${cep}`;
    const {data} = await axios.get(cepApiURL);

    if(isApiAddresError(data)) {
        if(data.status === 404) throw notFoundError(data.message);
        if(data.status === 400) throw badRequestError(data.message);
    }
    
    const formatedAddress: FormatedAddress = formatAddress(data);
    return formatedAddress;
}