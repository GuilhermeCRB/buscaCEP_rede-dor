import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function Form({ setResponse }){
    const [cep, setCep] = useState('');
    const [formState, setFormState] = useState(false);
    const BASE_API_URL = process.env.REACT_APP_API_BASE_URL;

    function handleSubmit(e){
        e.preventDefault();
        setResponse();
        setFormState(true);

        const URL = BASE_API_URL + `/cep/${cep}`;
        const promise = axios.get(URL);

        promise.then(({ data }) => {
            console.log(data);
            setResponse(data)
            setFormState(false);
        });

        promise.catch(({ response }) => {
            console.log(response);
            setResponse(response);
            setFormState(false);
        });
    }

    return(
        <FormContainer onSubmit={handleSubmit}>
            <h1>Buscador de CEP</h1>
            <input 
                required
                type='text'
                placeholder='__.___-___' 
                mask='99.999-999'
                disabled={formState}
                value={cep.cep}
                onChange={e => setCep(e.target.value)}
            />
            <button type="submit" disabled={formState}>Buscar</button>
        </FormContainer>
    );
}

const FormContainer = styled.form`
    width: 70%;
    height: 45%;
    display: flex;
    flex-direction: column;
    background-color: red;
`;