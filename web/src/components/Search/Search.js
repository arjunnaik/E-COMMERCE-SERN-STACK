import React from "react";
import "./SearchStyles.css";
import { Form, Button } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
function Search() {
  return (
    <div className="search container">
      <Form.Control
        className="search__searchInput"
        type="text"
        placeholder="Search"
      />
      <SearchIcon className="search__searchIcon" />
    </div>
  );
}

export default Search;
