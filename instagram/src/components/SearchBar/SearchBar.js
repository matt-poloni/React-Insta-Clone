import React from 'react';
import './SearchBar.css';
import { Form, Input } from 'reactstrap';

const SearchBar = props => {
  return (
    <header className="wrap-searchbar">
      <div className="logo-ig">
        <i className="fab fa-instagram"></i>
        <h1 className="wordmark-ig">Instagram</h1>
      </div>
      <div className="search">
        <Form inline
          onSubmit={props.searchPosts}
        >
          <Input
            type="search"
            id="searchbar"
            placeholder="Search"
            bsSize="lg"
            onChange={props.handleSearchChanges}
          />
        </Form>
      </div>
      <div className="nav-site">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user" onClick={props.logout}></i>
      </div>
    </header>
  )
}

export default SearchBar;