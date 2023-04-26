import { authenticateNewUser, signIn } from './firebase';
import models from './models';

const controllers = {
  createNewUser: (userInfo) => {
    authenticateNewUser(userInfo).then((userCredential) => {
      models.createNewUser(userCredential.id, userInfo);
    });
  },

  signIn: (userInfo) => {
    signIn(userInfo).then((userCredential) => {
      models.getUserInfo(userCredential.id);
    });
  },
};

export default controllers;
