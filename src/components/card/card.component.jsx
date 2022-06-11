import "./card.style.css";

const CardComponent = ({monster}) => {
    return (<div className="card-container">
        <div className='card-image'>
            <img src={`https://robohash.org/${monster.id}?set=set2&size=250x250`}
                 alt={`Monster ${monster.name}`} width='250px' height='250px' />
        </div>
        <div className="card-title">{monster.name}</div>
    </div>);
}


export default CardComponent;