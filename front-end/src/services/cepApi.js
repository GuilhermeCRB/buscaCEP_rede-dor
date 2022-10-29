import api from './api';

export async function getAddress(cep) {
  const promise = await api.get(`/cep/${cep}`);
  return promise;
}
