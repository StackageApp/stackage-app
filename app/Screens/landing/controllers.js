import { authenticateNewUser, signIn } from './firebase';
import models from './models';

const controllers = {
  createNewUser: (userInfo) => {
    authenticateNewUser(userInfo)
      .then((userCredential) => {
        //models.create user
        console.log(userCredential);
        // models.createNewUser(userCredential.uid, userInfo);

      })
      .then() => {
        getUserInfo()
      }
  },

  signIn: (userInfo) => {
    signIn(userInfo).then((userCredential) => {
      models.getUserInfo(userCredential.id);
    });
  },
};

export default controllers;
