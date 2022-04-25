import {Component} from "react";
import CardComponent from "./card.component";
import "./card.style.css";

class CardListComponent extends Component {
    render() {
        return (
            <div className="card-list">
                {this.props.monsters.map((monster, index) => {
                    return (<CardComponent key={index} monster={monster}/>);
                })}
            </div>
        );
    }
}

export default CardListComponent;