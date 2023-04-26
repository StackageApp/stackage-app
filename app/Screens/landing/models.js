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
    // console.log('models userInfo: ', user);
    // console.log('models uid: ', uid);
    axios
      .post(`/users/${uid}`, { userInfo: user })
      .then(() => {
        models.getUserInfo(uid);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  getUserInfo: (uid) => {
    axios
      .get(`/users/${uid}`)
      .then((response) => {
        store.dispatch(newUpdateCurrentUser(response));
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
