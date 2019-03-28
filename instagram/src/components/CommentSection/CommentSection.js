import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import PropTypes from 'prop-types';
// import { Form, Input } from 'reactstrap';
import moment from 'moment';

const WrapComments = styled.div`
  width: 100%;

  .comment-user {
    
  }
  
  .post-time {
    font-size: 0.75em;
  }
  
  .wrap-add-comment {
    margin-top: 1.25em;
    padding-top: 1em;
    border-top: 1px solid lightgray;
  }
  
  .add-comment {
    width: 100%;
    border: 0;
    font-size: 1.4rem;
  }
`

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      postID: props.postID,
      timestamp: props.timestamp,
      comments: props.comments,
      comment: '',
      updatePostComments: props.updatePostComments,
    }
  }

  handleChange = e => {
    this.setState({ comment: e.target.value })
  }

  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      id: `${Date.now()}`,
      username: this.state.username,
      text: this.state.comment || 'Strange women lying in ponds distributing swords is no basis for a system of government',
    }

    this.setState({
      comments: [...this.state.comments, newComment],
      comment: '',
    });
    
    this.state.updatePostComments(this.state.postID, this.state.comments);
  }

  render() {
    const timestamp = this.state.timestamp;
    const comments = this.state.comments;
    const comment = this.state.comment;

    return (
      <WrapComments>
        {comments && comments.map(comment =>
          <Comment key={comment.id} comment={comment} />
        )}
        <p className="post-time" title={moment(timestamp,'MMMM Do YYYY, h:mm:ss a').format('MMMM Do YYYY, h:mm a')}>{moment(timestamp,'MMMM Do YYYY, h:mm:ss a').fromNow().toUpperCase()}</p>
        <div className="wrap-add-comment">
          <form inline
            onSubmit={this.addNewComment}
          >
            <input
              type="text"
              value={comment}
              placeholder="Add a comment..."
              onChange={this.handleChange}
              className="add-comment"
            />
          </form>
        </div>
      </WrapComments>
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