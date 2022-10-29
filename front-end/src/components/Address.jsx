export default function Address({ response }){
    const {address, city, code, district, state} = response;

    return(
        <div>
            <p>{address}</p>
            <p>{city}</p>
            <p>{code}</p>
            <p>{district}</p>
            <p>{state}</p>
        </div>
    )
}