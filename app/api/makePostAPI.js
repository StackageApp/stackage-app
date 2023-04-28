import axios from 'axios';

const makePostAPI = {
  postThis: (postObj) => {
    axios
      .post(`http://18.219.151.178:3000/posts`, postObj)
      .then(() => {
        console.log('successful post!');
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default makePostAPI;
