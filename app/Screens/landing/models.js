import axios from 'axios';

/*
this page is meant to make the axios requests once authentication has finished
once the data is returned or posted the methods will then
update the store or do some other action
*/

const models = {
  createNewUser: (uid, userInfo) => {
    axios.post(`/users/${uid}`, { userInfo }).then(() => {
      // set response to the current user in the store
      // console.log(response);
      models.getUserInfo(uid);
    });
  },
  getUserInfo: (uid) => {
    axios.get(`/users/${uid}`).then((response) => {
      // update the store for current user with response info
      // console.log(response)
    });
  },
};

export default models;
