import React from 'react';
import styled, { css } from 'styled-components';

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
`

const LogoHeader = styled.div`
  font-family: 'Lobster Two', cursive;
  display: flex;
  align-items: center;
  cursor: pointer;

  i {
    margin-right: 0.5em;
    padding-right: 0.5em;
    border-right: 1px solid lightgray;
  }
`

const SearchHeader = styled.form`
  display: flex;
  align-items: center;
`

const SearchInput = styled.input`
  font-size: 1.4rem;
  text-align: center;
  background-color: #FAFAFA;
  border: 1px solid lightgrey;
  border-radius: 0.5rem;
`

const NavHeader = styled.div` i { margin-left: 1em } `

const SearchBar = props => {
  return (
    <Header>
      <LogoHeader>
        <i className="fab fa-instagram"></i>
        <h1 className="wordmark-ig">Instagram</h1>
      </LogoHeader>
      <SearchHeader
        onSubmit={props.searchPosts}
      >
        <SearchInput
          type="search"
          id="searchbar"
          placeholder="Search"
          onChange={props.handleSearchChanges}
        />
      </SearchHeader>
      <NavHeader>
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i
          className="far fa-user"
          onClick={props.logout}
          title={props.username}
        ></i>
      </NavHeader>
    </Header>
  )
}

export default SearchBar;