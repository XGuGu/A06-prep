import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

const msp = state => {
  return {
    post: {title: '', body: ''}
  };
}

const mdp = dispatch => {
  return {
    action: post => dispatch(createPost(post))
  };
};

export default connect(msp, mdp)(PostForm)
