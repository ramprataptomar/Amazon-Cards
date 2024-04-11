export default function Price({oldPrice, newPrice}){
    return(
        <>
            <span><sup>&#8377;</sup><strike>{oldPrice}</strike></span>
            &nbsp;&nbsp;&nbsp;
            <span><sup>&#8377;</sup>{newPrice}</span>
        </>
    )
}