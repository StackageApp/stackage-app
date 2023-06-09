import axios from 'axios';
import store from '../Redux/Store';
import { newPostFeed } from '../Redux/Slices/profileSlice';
import models from '../Screens/landing/models';

const profileApi = {
  getProfileFeed: (uid) => {
    axios.get(`http://18.219.151.178:3000/posts?uid=${uid}`)
      .then((response) => {
        store.dispatch(newPostFeed(response.data))
      })
      .catch((err) => console.log(err))
  },
  updateProfile: (uid, data) => {
    axios.patch(`http://18.219.151.178:3000/users/${uid}`, data)
      .then(() => {
        models.getUserInfo(uid);
      })
      .catch((err) => console.log(err))
  }
}

export default profileApi;
