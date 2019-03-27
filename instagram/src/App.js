import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/LoginPage';
import withAuthenticate from './components/authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

const App = () => {
  return (
    <div className="App">
      <ComponentFromWithAuthenticate />
    </div>
  );
}

export default App;
