import { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import InputMask from 'react-input-mask';
import {ThreeDots} from 'react-loader-spinner';

export default function Form({ setResponse }){
    const [cep, setCep] = useState('');
    const [formState, setFormState] = useState(false);
    const BASE_API_URL = process.env.REACT_APP_API_BASE_URL;
    const ref = useRef();

    function handleSubmit(e){
        e.preventDefault();
        setResponse();
        setFormState(true);

        const URL = BASE_API_URL + `/cep/${cep}`;
        const promise = axios.get(URL);

        promise.then(({ data }) => {
            setResponse(data)
            setFormState(false);
        });

        promise.catch(({ response }) => {
            setResponse(response);
            setFormState(false);
        });
    }

    return(
        <FormContainer onSubmit={handleSubmit}>
            <h1>Buscador de CEP</h1>
            <Input 
                required
                ref={ref}
                name='cep'
                type='text'
                placeholder='digite o CEP que deseja encontrar...' 
                mask='99999-999'
                disabled={formState}
                value={cep.cep}
                onChange={e => setCep(e.target.value)}
            />
            <button type="submit" disabled={formState}>
                {formState ? 
                    <ThreeDots width={"15%"} height={"100%"} color={"var(--main-color)"} /> 
                    : 
                    "Buscar"
                }
            </button>
        </FormContainer>
    );
}

const FormContainer = styled.form`
    width: calc(190px + 20%);
    height: calc(80px + 20%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10%;
    padding: 0 5%;
    font-size: calc(1rem + 20vw);
    border-radius: 10px;
    box-shadow: 0px 0px 5px 1px var(--secondary-color);

    h1{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        font-size: 1.4rem;
        font-weight: 700;
        flex-wrap: wrap;

        @media (max-width: 320px) {
            font-size: 1.2rem;
        }
    }

    button{
        width: 100%;
        height: 30px;
        font-family: var(--main-font);
        color: var(--font-color);
        padding: 2% auto;
        border: none;
        border-radius: 5px;
        color: var(--main-color);
        background-color: var(--secondary-color);

        >div{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

const Input = styled(InputMask)`
    &&{
        margin-bottom: 5%;
        padding: 5% 3%;
        border: 1px solid var(--font-color);
        border-radius: 5px;

        @media (max-width: 375px) {
            font-size: 0.9rem;
        }

        :focus{
            outline-color: var(--secondary-color);
        }
    }
`