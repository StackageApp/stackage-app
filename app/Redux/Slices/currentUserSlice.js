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
  initialState: { user },
  reducers: {
    newUpdateCurrentUser: (state, action) => {
      state.user.isGuest = false;
      state.user.friendslist = action.payload.friendslist;
      state.user.messafes = action.payload.messages;
      state.user.notifications = action.payload.notifications;
      state.user.posts = action.payload.posts;
      state.user.userInfo = action.payload.userInfo;
      state.user.uid = action.payload.uid;
      return state;
    },
    newContinueAsGuest: (state, action) => {
      state.user.isGuest = true;
    },
  },
});

const { actions, reducer } = homeSlice;

export const { newUpdateCurrentUser, newContinueAsGuest } = actions;

export default reducer;
