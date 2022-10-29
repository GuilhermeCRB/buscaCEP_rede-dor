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
                    "Enviar"
                }
            </button>
        </FormContainer>
    );
}

const FormContainer = styled.form`
    height: calc(40%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 6%;
    padding: 0 5%;
    font-size: calc(1rem + 20vw);
    border-radius: 10px;
    box-shadow: 0px 0px 5px 1px var(--secondary-color);

    h1{
        margin-bottom: calc(10px + 5%);
        text-align: center;
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
        transition: 0.2s ease-in-out;

        :hover{
            cursor: pointer;
            background-color: #0c529c;
        }

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