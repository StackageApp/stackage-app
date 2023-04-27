import axios from 'axios';
import store from '../Redux/Store';
import { newPosts } from '../Redux/Slices/homeSlice'

const postApi = {

  getAllPosts: () => {
    axios.get('http://localhost:3000/posts')
      .then(res => {
        store.dispatch(newPosts(res.data))
      })
      .catch(err => err)
  }

}

export default postApi;