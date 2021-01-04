import React, { useState, useEffect } from "react";
import "./SearchStyles.css";
import { Form, Button } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
function Search(props) {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (props.pageValue === 1) {
      history.replace(`/products/${searchValue}`);
    } else {
      //write search code here
    }
  };

  return (
    <div className="search container">
      <Form.Control
        className="search__searchInput"
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        type="submit"
        onClick={handleSearch}
        style={{ background: "none", border: "none" }}
      >
        <SearchIcon className="search__searchIcon" />
      </button>
    </div>
  );
}

export default Search;
