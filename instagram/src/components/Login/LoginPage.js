import React from 'react';
import styled from 'styled-components';

const WrapLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 35rem;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  margin: 1rem 0;
  padding: 4rem;
`

const WrapLoginHeader = styled.header`margin-bottom: 3rem`

const LoginHeader = styled.h1`
  font-family: 'Lobster Two', cursive;
  font-size: 4rem;
`

const LoginInput = styled.input`
  text-align: center;
  background-color: #FAFAFA;
  border: 1px solid lightgrey;
  width: 100%;
  margin-top: 1rem;
`

const LoginButton = styled.button`
  background-color: #3897F0;
  color: white;
  border: 0;
  border-radius: 0.5rem;
  padding: 0.25em;
  margin-top: 2rem;
  width: 100%;
`

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  login = e => {
    e.preventDefault();
    localStorage.setItem('username',this.state.username);
    this.setState({ password: '' });
    window.location.reload();
  }

  render() {
    return (
      <WrapLogin>
        <WrapLoginHeader className="wrap-login-header">
          <LoginHeader>Instagram</LoginHeader>
        </WrapLoginHeader>
        <form
          className="login-form"
          onSubmit={this.login}
        >
          <LoginInput
            type="text"
            name="username"
            value={this.state.username}
            placeholder="Username"
            bsSize="lg"
            onChange={this.handleChanges}
          />
          <LoginInput
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            bsSize="lg"
            onChange={this.handleChanges}
          />
          <LoginButton type="submit">Login</LoginButton>
        </form>
      </WrapLogin>
    )
  }
}

export default LoginPage;