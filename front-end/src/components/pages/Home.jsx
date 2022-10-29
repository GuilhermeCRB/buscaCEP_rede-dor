import styled from 'styled-components';

import Form from "../Form";

export default function Home(){
    return(
        <Main>
            <h1>Buscador de CEP</h1>
            <Form />
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