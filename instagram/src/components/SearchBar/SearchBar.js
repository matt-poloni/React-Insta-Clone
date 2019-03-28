import React from 'react';
import styled, { css } from 'styled-components';
import { Form, Input } from 'reactstrap';

const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 2.4rem;
  width: 100%;
  border-bottom: 1px solid lightgray;
  background-color: white;
  z-index: 2;

  .flex-searchbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo-ig {
    font-family: 'Lobster Two', cursive;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .logo-ig i {
    margin-right: 0.5em;
    padding-right: 0.5em;
    border-right: 1px solid lightgray;
  }
  
  .search {
    display: flex;
    align-items: center;
  }
  
  .search input {
    text-align: center;
    background-color: #FAFAFA;
  }
  
  .nav-site i {
    margin-left: 1em;
  }
`

const SearchBar = props => {
  return (
    <Header>
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
        <i
          className="far fa-user"
          onClick={props.logout}
          title={props.username}
        ></i>
      </div>
    </Header>
  )
}

export default SearchBar;