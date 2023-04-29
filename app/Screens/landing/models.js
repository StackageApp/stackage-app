import axios from 'axios';

import { newContinueAsGuest, newUpdateCurrentUser } from '../../Redux/Slices/currentUserSlice';
import store from '../../Redux/Store';

/*
this page is meant to make the axios requests once authentication has finished
once the data is returned or posted the methods will then
update the store or do some other action
*/

const models = {
  createNewUser: (uid, user) => {
    axios
      .post(`http://18.219.151.178:3000/users/${uid}`, { userInfo: user })
      .then(() => {
        models.getUserInfo(uid);
      })
      .catch((err) => {
        console.log('my error creating a user', err.message);
      });
  },

  getUserInfo: (uid) => {
    axios
      .get(`http://18.219.151.178:3000/users/${uid}`)
      .then((response) => {
        response.data.isGuest = false;
        response.data.uid = uid;
        store.dispatch(newUpdateCurrentUser(response.data));
      })
      .catch((err) => {
        console.log('could not get user info', err);
      });
  },

  continueAsGuest: () => {
    store.dispatch(newContinueAsGuest());
  },
};

export default models;
