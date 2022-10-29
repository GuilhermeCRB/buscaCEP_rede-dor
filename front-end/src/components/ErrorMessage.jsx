import styled from 'styled-components';

export default function ErrorMessage({ response }){
    const message = response.data;
    return(
        <Message>{message}</Message>
    )
}

const Message = styled.p`
    text-align: center;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--error-message);
`