import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function Form(){
    const [cep, setCep] = useState('');
    const [formState, setFormState] = useState(false);
    const BASE_API_URL = process.env.REACT_APP_API_BASE_URL;

    function handleSubmit(e){
        e.preventDefault();
        setFormState(true);

        console.log(cep)
        const URL = BASE_API_URL + `/cep/${cep}`;
        const promise = axios.get(URL);

        promise.then(({ data }) => {
            console.log(data);
            setFormState(false);
        });

        promise.catch(err => {
            console.log(err);
            setFormState(false);
        });
    }

    return(
        <FormContainer onSubmit={e => handleSubmit(e)}>
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