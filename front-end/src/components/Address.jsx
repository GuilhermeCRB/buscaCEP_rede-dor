export default function Address({ response }){
    const {address, city, code, district, state} = response;

    return(
        <div>
            <p><span>CEP: </span>{code}</p>
            <p><span>Logradouro: </span>{address}</p>
            <p><span>Cidade: </span>{city}</p>
            <p><span>Bairro: </span>{district}</p>
            <p><span>UF: </span>{state}</p>
        </div>
    )
}