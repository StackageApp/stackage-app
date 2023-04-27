import { authenticateNewUserFB, signInFB } from './firebase';
import models from './models';

const controllers = {
  createNewUser: (name, email, location, occupation, password) => {
    const userInfo = {
      name,
      email,
      location,
      occupation,
    };
    console.log('creating new user', userInfo);
    authenticateNewUserFB(email, password).then((userCredential) => {
      models.createNewUser(userCredential.user.uid, userInfo);
    });
  },

  signIn: (email, password) => {
    console.log('sign in controller', email, password);
    signInFB(email, password).then((userCredential) => {
      // console.log('signed in auth', userCredential);
      models.getUserInfo(userCredential.user.uid);
    });
  },

  continueAsGuest: () => {
    models.continueAsGuest();
  },
};

export default controllers;
