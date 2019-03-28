import React from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import { Spinner } from 'reactstrap';
import dummyData from '../../dummy-data';

const WrapPostsPage = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  .load-main {
    width: 5rem;
    height: 5rem;
    margin-top: 1rem;
  }
`

const WrapPosts = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
  max-width: 64rem;
`

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.username,
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
    }, 500);
  }

  logout = () => {
    localStorage.removeItem('username',this.state.username);
    window.location.reload();
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
            likes: userLike
              ? post.likes-1
              : post.likes+1,
          }
          : post;
      })
    })
  }

  render() {
    return (
      <WrapPostsPage>
        <SearchBar
          searchPosts={this.searchPosts}
          handleSearchChanges={this.handleSearchChanges}
          logout={this.logout}
          username={this.state.username}
        />
        <WrapPosts>
          {this.state.posts.length === 0
            ? <Spinner className="load-main" />
            : this.state.posts
              .filter(post => post.username.includes(this.state.query))
              .map(post =>
                <PostContainer
                  key={post.id}
                  username={this.state.username}
                  post={post}
                  updatePostComments={this.updatePostComments}
                  toggleUserLike={this.toggleUserLike}
                />
          )}
        </WrapPosts>
      </WrapPostsPage>
    );
  }
}

export default PostsPage;