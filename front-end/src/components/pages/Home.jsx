import { useState } from 'react';
import styled from 'styled-components';

import Form from "../Form";
import Address from '../Address';
import ErrorMessage from '../ErrorMessage';

export default function Home(){
    const [response, setResponse] = useState();

    return(
        <Main>
            <Form setResponse={setResponse} />
            {response && <Address response={response} />}
            {response && <ErrorMessage response={response} />}
        </Main>
    );
}

const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;