import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';

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

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      text: PropTypes.string,
    })
  )
}

export default CommentSection;