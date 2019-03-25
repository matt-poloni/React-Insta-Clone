import React from 'react';

const CommentSection = props => {
  const comments = props.comments;

  return (
    <div className="post-comments">
      {comments.map(comment =>
        <p key={comment.id}>
          <a href="#" className="comment-user">{comment.username}</a>
          {comment.text}
        </p>
      )}
    </div>
  )
}

export default CommentSection;