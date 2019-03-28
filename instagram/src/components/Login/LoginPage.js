import React from 'react';
import styled, { css } from 'styled-components';
import './Login.css';
import { Form, Input, Button } from 'reactstrap';

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

  .login-header {
    font-family: 'Lobster Two', cursive;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  
  .login-form input {
    background-color: #FAFAFA;
    margin-top: 1rem;
  }
  
  .login-form button {
    margin-top: 2rem;
  }
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
        <header className="wrap-login-header">
          <h1 className="login-header">Instagram</h1>
        </header>
        <Form
          className="login-form"
          onSubmit={this.login}
        >
          <Input
            type="text"
            name="username"
            value={this.state.username}
            placeholder="Username"
            bsSize="lg"
            onChange={this.handleChanges}
          />
          <Input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            bsSize="lg"
            onChange={this.handleChanges}
          />
          <Button type="submit" color="primary" size="lg" block>Login</Button>
        </Form>
      </WrapLogin>
    )
  }
}

export default LoginPage;