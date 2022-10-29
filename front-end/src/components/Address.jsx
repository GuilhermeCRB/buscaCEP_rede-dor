import styled from 'styled-components';

export default function Address({ response }) {
  const { address, city, code, district, state } = response;

  return (
    <AddressContainer>
      <p>
        <span>CEP: </span>
        {code}
      </p>
      <p>
        <span>Logradouro: </span>
        {address}
      </p>
      <p>
        <span>Cidade: </span>
        {city}
      </p>
      <p>
        <span>Bairro: </span>
        {district}
      </p>
      <p>
        <span>UF: </span>
        {state}
      </p>
    </AddressContainer>
  );
}

const AddressContainer = styled.div`
  width: var(--box-width);
  margin: 0 auto;
  max-width: var(--box-max-width);

  span {
    margin-right: 2%;
    font-weight: 700;
    color: var(--secondary-color);
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1%;
  }
`;
