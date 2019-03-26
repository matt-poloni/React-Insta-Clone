import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import { Spinner } from 'reactstrap';
import dummyData from './dummy-data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        posts: dummyData,
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <main className="wrap-posts">
          {this.state.posts.length === 0
            ? <Spinner className="load-main" />
            : this.state.posts.map(post =>
              <PostContainer key={post.id} post={post} />
          )}
        </main>
      </div>
    );
  }
}

export default App;
