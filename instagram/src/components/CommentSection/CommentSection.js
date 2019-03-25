import React from 'react';
import './CommentSection.css';
import Comment from './Comment';
import PropTypes from 'prop-types';
import { Form, Input } from 'reactstrap';

const CommentSection = props => {
  const comments = props.comments;

  return (
    <div className="post-comments">
      {comments.map(comment =>
        <Comment key={comment.id} comment={comment} />
      )}
      <p className="post-time">{props.timestamp}</p>
      <div className="wrap-add-comment">
        <Form inline>
            <Input type="text" className="add-comment" placeholder="Add a comment..." />
          </Form>
      </div>
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