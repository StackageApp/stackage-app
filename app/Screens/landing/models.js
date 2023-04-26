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
      .post(
        `http://127.0.0.1:3000/users/${uid}`,
        { userInfo: user },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(() => {
        // console.log(response.status);
        models.getUserInfo(uid);
      })
      .catch((err) => {
        console.log('my error creating a user', err.message);
      });
  },

  getUserInfo: (uid) => {
    // console.log('models sign in', uid);
    axios
      .get(`http://127.0.0.1:3000/users/${uid}`)
      .then((response) => {
        // console.log('the response from our server: ', response);
        // console.log('data', response.data);
        response.data.isGuest = false;
        response.data.uid = uid;
        // console.log('response', response.data);
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
