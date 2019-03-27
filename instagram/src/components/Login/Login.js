import React from 'react';
import './Login.css';
import { Form, Input, Button } from 'reactstrap';

class Login extends React.Component {
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

  login = () => {}

  render() {
    return (
      <div className="wrap-login">
        <header className="wrap-login-header">
          <h1 className="login-header">Instagram</h1>
        </header>
        <Form
          className="login-form"
          onSubmit={this.submitLogin}
        >
          <Input
            type="text"
            name="username"
            placeholder="Username"
            bsSize="lg"
            onChange={this.handleChanges}
          />
          <Input
            type="text"
            name="password"
            placeholder="Username"
            bsSize="lg"
            onChange={this.handleChanges}
          />
          <Button type="submit">Login</Button>
        </Form>
      </div>
    )
  }
}

export default Login;