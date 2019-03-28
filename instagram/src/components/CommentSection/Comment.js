import React from 'react';
import PropTypes from 'prop-types';
import { Username } from '../PostContainer/PostContainer';

const Comment = props => {
  const comment = props.comment;

  return (
    <p>
      <Username inline href="#">{comment.username}</Username>
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