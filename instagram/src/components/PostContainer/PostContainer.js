import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
  const post = props.post;

  return (
    <article className="post">
      <div className="post-header">
        <img className="user-thumb" src={post.thumbnailUrl} alt={post.username} />
        <span className="username">{post.username}</span>
      </div>
      <div className="post-img">
        <img src={post.imageUrl} alt='' />
      </div>
      <div className="post-interact">
        <div className="icon-wrap">
          <i className="far fa-heart"></i>
          <i className="far fa-comment fa-flip-horizontal"></i>
        </div>
        <span className="like-count">{post.likes} likes</span>
      </div>
      <CommentSection comments={post.comments} />
    </article>
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
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        username: PropTypes.string,
        text: PropTypes.string,
      }),
    )
  })
}

export default PostContainer;