import "./cardPicture.css"

// eslint-disable-next-line react/prop-types
export default function CardPicture({Data}){
    return(
        <div>
            <img className="card-img" src={Data} alt={Data}></img>
        </div>
    )
}