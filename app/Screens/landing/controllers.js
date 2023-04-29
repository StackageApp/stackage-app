import { authenticateNewUserFB, signInFB } from './firebase';
import models from './models';

const controllers = {
  createNewUser: (name, email, location, occupation, password) => {
    const userInfo = {
      name,
      email,
      location,
      occupation,
      photoURL: '',
    };
    authenticateNewUserFB(email, password).then((userCredential) => {
      models.createNewUser(userCredential.user.uid, userInfo);
    });
  },

  signIn: (email, password) => {
    signInFB(email, password)
      .then((userCredential) => {
        models.getUserInfo(userCredential.user.uid);
      })
      .catch((err) => {
        console.log('could not sign in', err);
      });
  },

  continueAsGuest: () => {
    models.continueAsGuest();
  },
};

export default controllers;
