import axios from 'axios';

const makePostAPI = {
  postThis: (postObj) => {
    console.log('got to postObj in makePostAPI');
    axios
      .post(`http://127.0.0.1:3000/posts`, postObj)
      .then(() => {
        console.log('successful post!');
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default makePostAPI;
