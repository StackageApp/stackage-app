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
    signInFB(email, password).then((userCredential) => {
      // console.log('signed in auth', userCredential);
      // userCredential.user.uid
      // hard coded uid for the purpose of the demo
      models.getUserInfo('vY1hQh5wpwgI1zzaweeooEqyJAi1');
    });
  },

  continueAsGuest: () => {
    models.continueAsGuest();
  },
};

export default controllers;
