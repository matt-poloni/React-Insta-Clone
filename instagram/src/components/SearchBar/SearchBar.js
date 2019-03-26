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
        <Form inline>
          <Input type="text" id="searchbar" placeholder="Search" bsSize="lg" />
        </Form>
      </div>
      <div className="nav-site">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
    </header>
  )
}

export default SearchBar;