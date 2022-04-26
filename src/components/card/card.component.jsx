import {Component} from "react";
import "./card.style.css";

class CardComponent extends Component {
    render() {
        return (<div className="card-container">
            <div className='card-image'>
                <img src={`https://robohash.org/${this.props.monster.id}?set=set2&size=250x250`}
                     alt={`Monster ${this.props.monster.name}`} width='250px' height='250px' />
            </div>
            <div className="card-title">{this.props.monster.name}</div>
        </div>);
    }
}

export default CardComponent;