import CardComponent from "../card/card.component";
import "./card-list.style.css";

const CardListComponent = ({monsters}) => {
    return (
        <div className="card-list">
            {monsters.map((monster, index) => {
                return (<CardComponent key={index} monster={monster}/>);
            })}
        </div>
    )
}


export default CardListComponent;