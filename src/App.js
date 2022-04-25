import "./App.css";
import {Component} from "react";
import CardListComponent from "./components/card/card-list.component";
import SearchInputComponent from "./components/search/search-input.component";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            query: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => this.setState({monsters: users}));
    }

    queryUpdated = (event) => {
        const query = event.target.value.toLowerCase();
        this.setState({query});
    };

    render() {
        const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(this.state.query);
        });

        return (
            <div className="App">
                <h1 className='page-title'>Monsters</h1>
                <SearchInputComponent
                    placeholder={"Search monsters..."}
                    onChangeHandler={this.queryUpdated}/>
                <CardListComponent monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
