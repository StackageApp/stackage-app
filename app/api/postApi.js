import axios from 'axios';

import { newPosts } from '../Redux/Slices/homeSlice';
import store from '../Redux/Store';

const postApi = {
  getAllPosts: () => {
    axios
      .get('http://localhost:3000/posts')
      .then((res) => {
        store.dispatch(newPosts(res.data));
      })
      .catch((err) => err);
  },
  incrementLikeBy1: (postid) => {
    console.log(postid);
    axios
      .patch(`http://localhost:3000/posts/${postid}`)
      .then(() => {
        axios.get('http://localhost:3000/posts');
      })
      .then((res) => {
        store.dispatch(newPosts(res.data));
      })
      .catch((err) => err);
  },
};

export default postApi;
