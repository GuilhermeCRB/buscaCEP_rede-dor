import axios from "axios";

import addresFactory from "../factories/formatAddress.js";
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

export type FormatedAddress = Omit<ApiAddress, 'ok' | 'statusText'>;

type AddressResponse = ApiAddress | ApiAddressError;

export const isApiAddres = (a: AddressResponse): a is ApiAddress => a?.ok === true;
export const isApiAddresError = (e: AddressResponse): e is ApiAddressError => e?.ok === false;
export const isFormatedAddres = (a: any): a is ApiAddressError => a?.ok === undefined && a?.status === 200;

export async function getAddress(cep: string) {
    const cepApiURL = `https://ws.apicep.com/cep.json?code=${cep}`;
    const {data}: {data: AddressResponse} = await axios.get(cepApiURL);

    if(isApiAddresError(data)) {
        if(data.status === 404) throw notFoundError(data.message);
        if(data.status === 400) {
            if(data.message === 'Blocked by flood') data.message = 'Foi detectado um excesso de requisições. Por favor, tente mais tarde.'
            throw badRequestError(data.message)
        };
    }

    if(isApiAddres(data)) {
        const formatedAddress: FormatedAddress = addresFactory.formatAddress(data);
        return formatedAddress;
    }
}