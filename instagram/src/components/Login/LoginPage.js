import React from 'react';
import './Login.css';
import { Form, Input, Button } from 'reactstrap';

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
      <div className="wrap-login">
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
            type="text"
            name="password"
            value={this.state.password}
            placeholder="Password"
            bsSize="lg"
            onChange={this.handleChanges}
          />
          <Button type="submit" color="primary" size="lg" block>Login</Button>
        </Form>
      </div>
    )
  }
}

export default LoginPage;