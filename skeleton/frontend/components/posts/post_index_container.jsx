import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions';

const msp = state => {
  return {
    posts: Object.values(state.posts)
  }
};

const mdp = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: id => dispatch(deletePost(id))
  };
};

export default connect(msp, mdp)(PostIndex);
