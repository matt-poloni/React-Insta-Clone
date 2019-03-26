import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
  const post = props.post;
  const updatePostComments = props.updatePostComments;
  const toggleUserLike = props.toggleUserLike;
  const filtered = post.filtered;

  return (
    <article className={`post${filtered ? ' filtered' : ''}`}>
      <div className="post-header">
        <img className="user-thumb" src={post.thumbnailUrl} alt={post.username} />
        <a href="#" className="username">{post.username}</a>
      </div>
      <div className="post-img">
        <img src={post.imageUrl} alt='' />
      </div>
      <div className="post-bottom">
        <div className="post-interact">
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
        </div>
        <CommentSection
          postID={post.id}
          timestamp={post.timestamp}
          comments={post.comments}
          updatePostComments={updatePostComments}
        />
      </div>
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
    comments: PropTypes.array,
  })
}

export default PostContainer;