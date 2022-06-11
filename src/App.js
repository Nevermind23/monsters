import "./App.css";
import {useEffect, useState} from "react";
import CardListComponent from "./components/card-list/card-list.component";
import SearchInputComponent from "./components/search/search-input.component";


const App = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => setMonsters(users));
    }, [])

    useEffect(() => {
        setFilteredMonsters(monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchQuery);
        }));
    }, [monsters, searchQuery])

    const queryUpdated = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
    };

    return (
        <div className="App">
            <h1 className="page-title">Monsters</h1>
            <SearchInputComponent
                placeholder={"Search monsters..."}
                onChangeHandler={queryUpdated}/>
            <CardListComponent monsters={filteredMonsters}/>
        </div>
    );
};

export default App;
