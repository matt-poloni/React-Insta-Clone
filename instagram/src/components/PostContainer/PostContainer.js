import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  const post = props.post;

  return (
    <article className="post">
      <div className="post-header">
        <img src={post.thumbnailUrl} alt={post.username} />
        <span className="username">{post.username}</span>
      </div>
      <div className="post-img">Post Image</div>
      <div className="post-interact">Post Interactions</div>
      <CommentSection />
    </article>
  )
}

export default PostContainer;