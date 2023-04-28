import axios from 'axios';

import { newPosts } from '../Redux/Slices/homeSlice';
import store from '../Redux/Store';

const postApi = {
  getAllPosts: () => {
    axios
      .get('http://18.219.151.178:3000/posts')
      .then((res) => {
        store.dispatch(newPosts(res.data));
      })
      .catch((err) => err);
  },
  incrementLikeBy1: (postid) => {
    axios
      .patch(`http://18.219.151.178:3000/posts/${postid}`)
      .then(() => {
        axios.get('http://18.219.151.178:3000/posts');
      })
      .then((res) => {
        store.dispatch(newPosts(res.data));
      })
      .catch((err) => err);
  },
};

export default postApi;
