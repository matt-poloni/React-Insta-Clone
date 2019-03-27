import React from 'react';

const withAuthenticate = PassedComponent =>
  class extends React.Component {
    render() {
      return <PassedComponent />;
    }
  };

export default withAuthenticate;