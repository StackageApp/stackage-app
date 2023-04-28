import { createSlice } from '@reduxjs/toolkit';

const user = {
  uid: '',
  isGuest: true,
  friendslist: [],
  messages: [],
  notifications: 0,
  posts: [],
  userInfo: {
    photoURL: '',
    email: '',
    location: '',
    name: '',
    occupation: '',
  },
};

const homeSlice = createSlice({
  name: 'currentUser',
  initialState: user,
  reducers: {
    newUpdateCurrentUser: (state, action) => {
      state.isGuest = action.payload.isGuest;
      state.friendslist = action.payload.friendslist;
      state.messafes = action.payload.messages;
      state.notifications = action.payload.notifications;
      state.posts = action.payload.posts;
      state.userInfo = action.payload.userInfo;
      state.uid = action.payload.uid;
    },
    newContinueAsGuest: (state, action) => {
      state.isGuest = true;
    },
  },
});

const { actions, reducer } = homeSlice;

export const { newUpdateCurrentUser, newContinueAsGuest } = actions;

export default reducer;