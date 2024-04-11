import Title from './Title'
import Description from './Description'
import Price from './Price';
import CardPicture from './CardPicture';
import './Card.css';

function Card({Data}){
    return(
        <>
        <div className='card'>
            <div className='description-box'>
                <div className='title'>
                    <Title Data={Data.title}/>
                </div>
                <CardPicture Data={Data.picture}/>
                <Description Data={Data.description}/>
            </div>
            <div className='price-box'>
                {/* eslint-disable-next-line react/prop-types */}
                <Price oldPrice={Data.oldPrice} newPrice={Data.newPrice}/>
            </div>
        </div>
        </>
    )
}

export default Card;