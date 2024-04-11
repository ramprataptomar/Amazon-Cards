import "./Description.css"

// eslint-disable-next-line react/prop-types
function Description({Data}){
    return(
        <div className="description-line">
            <li>{Data[0]}</li>
            <li>{Data[1]}</li>
        </div>
    )
}

export default Description;