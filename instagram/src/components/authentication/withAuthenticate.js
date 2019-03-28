import React from 'react';

const withAuthenticate = FirstComponent => SecondComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
      }
    }

    componentDidMount() {
      localStorage.username && this.setState({ loggedIn: true });
    }

    render() {
      return this.state.loggedIn
        ? <FirstComponent />
        : <SecondComponent />;
    }
  };

export default withAuthenticate;