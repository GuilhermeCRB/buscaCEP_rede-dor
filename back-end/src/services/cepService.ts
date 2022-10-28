import axios from "axios";

import formatAddress from "../factories/formatAddress.js";

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

type Address = Omit<ApiAddress, 'ok' | 'statusText'>;

export async function getAddress(cep: string) {
    const cepApiURL = `https://ws.apicep.com/cep.json?code=${cep}`;
    const {data}: {data: ApiAddress} = await axios.get(cepApiURL);
    const address: Address = formatAddress(data);
    return address;
}