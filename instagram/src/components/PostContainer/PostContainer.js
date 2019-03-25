import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  return (
    <article className="post">
      <div className="post-header">Post Header</div>
      <div className="post-img">Post Image</div>
      <div className="post-interact">Post Interactions</div>
      <CommentSection />
    </article>
  )
}

export default PostContainer;