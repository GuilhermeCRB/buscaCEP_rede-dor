import { useState } from 'react';
import styled from 'styled-components';

import Form from '../Form';
import Address from '../Address';
import ErrorMessage from '../ErrorMessage';
import Header from '../Header';

export default function Home() {
  const [response, setResponse] = useState();

  return (
    <Main>
      <Header />
      <Form setResponse={setResponse} />
      {response && response.status === 200 ? <Address response={response} /> : <></>}
      {response && response.status !== 200 ? <ErrorMessage response={response} /> : <></>}
    </Main>
  );
}

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
