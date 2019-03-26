import React from 'react';
import './CommentSection.css';
import Comment from './Comment';
import PropTypes from 'prop-types';
import { Form, Input } from 'reactstrap';
import moment from 'moment';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postID: props.postID,
      timestamp: props.timestamp,
      comments: props.comments,
      comment: '',
    }
  }

  onChange = e => {
    this.setState({ comment: e.target.value })
  }

  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      username: 'violenceInherentInTheSystem',
      text: this.state.comment || 'Strange women lying in ponds distributing swords is no basis for a system of government',
    }

    this.setState({
      comments: [...this.state.comments, newComment],
      comment: '',
    })
  }

  render() {
    const timestamp = this.state.timestamp;
    const comments = this.state.comments;
    const comment = this.state.comment;

    return (
      <div className="post-comments">
        {comments && comments.map(comment =>
          <Comment key={comment.id} comment={comment} />
        )}
        <p className="post-time" title={moment(timestamp,'MMMM Do YYYY, h:mm:ss a').format('MMMM Do YYYY, h:mm a')}>{moment(timestamp,'MMMM Do YYYY, h:mm:ss a').fromNow().toUpperCase()}</p>
        <div className="wrap-add-comment">
          <Form inline
            onSubmit={this.addNewComment}
          >
            <Input
              type="text"
              value={comment}
              placeholder="Add a comment..."
              onChange={this.onChange}
              className="add-comment"
            />
          </Form>
        </div>
      </div>
    );
  }
}


CommentSection.propTypes = {
  postID: PropTypes.string,
  timestamp: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  comment: PropTypes.string,
}

export default CommentSection;