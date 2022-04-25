import {Component} from "react";
import "./card.style.css";

class CardComponent extends Component {
    render() {
        return (<div className="card-container">
            <img src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`}
                 alt={`Monster ${this.props.monster.name}`} />
            <div className="card-title">{this.props.monster.name}</div>
        </div>);
    }
}

export default CardComponent;