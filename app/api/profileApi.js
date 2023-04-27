import axios from 'axios';
import store from '../Redux/Store';
import { newPostFeed } from '../Redux/Slices/profileSlice';

const profileApi = {
  // getProfile: (uid) => {
  //   axios.get(`http://127.0.0.1:3000/users/${uid}`)
  //     .then((response) => {
  //       store.dispatch(newProfile(response.data.userInfo))
  //     })
  //     .catch((err) => console.log(err))
  // },

  getProfileFeed: (uid) => {
    axios.get(`http://127.0.0.1:3000/posts?uid=${uid}`)
      .then((response) => {
        console.log('res:', response.data)
        store.dispatch(newPostFeed(response.data))
      })
      .catch((err) => console.log(err))
  }
}

export default profileApi;
