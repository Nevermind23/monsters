import "./search.style.css";

const SearchInputComponent = ({placeholder, onChangeHandler}) => {
    return (
        <input
            type="search"
            className="search-box"
            placeholder={placeholder}
            onChange={onChangeHandler}/>
    );
}

export default SearchInputComponent;