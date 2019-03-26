import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  const comment = props.comment;

  return (
    <p>
      <a href="#" className="comment-user">{comment.username}</a>
      {comment.text}
    </p>
  )
}

Comment.propTypes = {
  id: PropTypes.string,
  username: PropTypes.string,
  text: PropTypes.string,
}

export default Comment;