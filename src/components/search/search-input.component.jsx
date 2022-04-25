import {Component} from "react";
import "./search.style.css";

class SearchInputComponent extends Component {
    constructor() {
        super();

        this.state = {
            query: "",
        };
    }

    render() {
        return (
            <input
                type="search"
                className="search-box"
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}/>
        );
    }
}

export default SearchInputComponent;