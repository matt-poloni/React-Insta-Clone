import React from 'react';
import styled, { css } from 'styled-components';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostArticle = styled.article`
  text-align: left;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  margin: 1rem 0;
`

const PostHeader = styled.div`padding: 1em`

const UserThumbnail = styled.img`
  width: 2em;
  height: auto;
  border-radius: 50%;
  margin-right: 1em;
`

export const Username = styled.a`
  color: black;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: black;
  }

  ${props =>
    props.type === 'inline' &&
    css`
      display: inline-block;
      margin-right: 0.5em;
    `}
`;

const PostImg = styled.img`
width: 100%;
height: auto;
`

const PostBottom = styled.div`padding: 1em;`

const PostInteract = styled.div`
  display: flex;
  flex-direction: column;

  i {
    font-size: 1.5em;
    margin-right: 0.5em;
  }

  .fas.fa-heart {
    color: red;
  }
`

const PostContainer = props => {
  const username = props.username;
  const post = props.post;
  const updatePostComments = props.updatePostComments;
  const toggleUserLike = props.toggleUserLike;

  return (
    <PostArticle>
      <PostHeader>
        <UserThumbnail src={post.thumbnailUrl} alt={post.username} />
        <Username href="#">{post.username}</Username>
      </PostHeader>
      <PostImg src={post.imageUrl} alt='' />
      <PostBottom>
        <PostInteract>
          <div className="icon-wrap">
            { post.userLike
            ? <i
            className="fas fa-heart"
            onClick={() => toggleUserLike(post.id, post.userLike)}
            ></i>
            : <i
            className="far fa-heart"
            onClick={() => toggleUserLike(post.id, post.userLike)}
          ></i>
          }
            <i className="far fa-comment fa-flip-horizontal"></i>
          </div>
          <p className="like-count">{post.likes} likes</p>
        </PostInteract>
        <CommentSection
          username={username}
          postID={post.id}
          timestamp={post.timestamp}
          comments={post.comments}
          updatePostComments={updatePostComments}
        />
      </PostBottom>
    </PostArticle>
  )
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array,
  })
}

export default PostContainer;