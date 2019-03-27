import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import { Spinner } from 'reactstrap';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: '',
      query: '',
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        posts: dummyData,
      });
    }, 2000);
  }

  handleSearchChanges = e => {
    this.setState({ search: e.target.value })
  }

  searchPosts = e => {
    e.preventDefault();

    this.setState({
      query: this.state.search,
    })
  }

  updatePostComments = (id, comments) => {
    this.setState({
      posts: this.state.posts.map(post => {
        return post.id === id
          ? {
            ...post,
            comments: comments,
          }
          : post;
      })
    })
  }

  toggleUserLike = (id, userLike, e) => {
    this.setState({
      posts: this.state.posts.map(post => {
        return post.id === id
          ? {
            ...post,
            userLike: !post.userLike,
            likes: userLike ? post.likes-1 : post.likes+1,
          }
          : post;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchPosts={this.searchPosts}
          handleSearchChanges={this.handleSearchChanges}
        />
        <main className="wrap-posts">
          {this.state.posts.length === 0
            ? <Spinner className="load-main" />
            : this.state.posts
              .filter(post => post.username.includes(this.state.query))
              .map(post =>
                <PostContainer
                  key={post.id}
                  post={post}
                  updatePostComments={this.updatePostComments}
                  toggleUserLike={this.toggleUserLike}
                />
          )}
        </main>
      </div>
    );
  }
}

export default PostsPage;