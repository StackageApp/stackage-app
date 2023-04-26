import { authenticateNewUser, signIn } from './firebase';
import models from './models';

const controllers = {
  createNewUser: (name, email, location, occupation, password) => {
    const userInfo = {
      name,
      email,
      location,
      occupation,
    };

    authenticateNewUser(email, password).then((userCredential) => {
      models.createNewUser(userCredential.user.uid, userInfo);
    });
  },

  signIn: (email, password) => {
    signIn(email, password).then((userCredential) => {
      models.getUserInfo(userCredential.user.id);
    });
  },

  continueAsGuest: () => {
    models.continueAsGuest();
  },
};

export default controllers;
