import React from 'react';

const withAuthenticate = (PassedComponent, props) =>
  class extends React.Component {
    render() {
      return <PassedComponent posts={props.posts} />;
    }
  };

export default withAuthenticate;