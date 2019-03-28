import React from 'react';
import styled, { css } from 'styled-components';
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

  main.wrap-posts {
    display: flex;
    flex-direction: column;
    margin-top: 7rem;
    max-width: 64rem;
  }
  
  .load-main {
    width: 5rem;
    height: 5rem;
    margin-top: 1rem;
  }
  
  .post {
    text-align: left;
    background-color: white;
    border: 1px solid lightgray;
    border-radius: 0.5rem;
    margin: 1rem 0;
  }
  
  .post a {
    color: black;
    font-weight: bold;
    text-decoration: none;
  }
  
  .post .post-header {
    padding: 1em;
  }
  
  .post .user-thumb {
    width: 2em;
    height: auto;
    border-radius: 50%;
    margin-right: 1em;
  }
  
  .post .post-img img {
    width: 100%;
    height: auto;
  }
  
  .post .post-bottom {
    padding: 1em;
  }
  
  .post .post-interact {
    display: flex;
    flex-direction: column;
  }
  
  .post .post-interact i {
    font-size: 1.5em;
    margin-right: 0.5em;
  }
  
  .post .post-interact .fas.fa-heart {
    color: red;
  }
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
      <WrapPostsPage className="PostsPage">
        <SearchBar
          searchPosts={this.searchPosts}
          handleSearchChanges={this.handleSearchChanges}
          logout={this.logout}
          username={this.state.username}
        />
        <main className="wrap-posts">
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
        </main>
      </WrapPostsPage>
    );
  }
}

export default PostsPage;