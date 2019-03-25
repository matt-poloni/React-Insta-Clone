import React from 'react';
import './SearchBar.css';
import { Form, Input } from 'reactstrap';

const SearchBar = props => {
  return (
    <header className="wrap-searchbar">
      <div className="logo-ig">
        <i className="fab fa-instagram"></i>
        <span className="wordmark-ig"> | Instagram</span>
      </div>
      <div className="search">
        <Form inline>
          <Input type="text" id="searchbar" placeholder="Search" bsSize="lg" />
        </Form>
      </div>
      <nav className="nav-site">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </nav>
    </header>
  )
}

export default SearchBar;