import { createSlice } from '@reduxjs/toolkit';

const user = {
  uid: 'vY1hQh5wpwgI1zzaweeooEqyJAi1',
  isGuest: true,
  friendslist: [],
  messages: [],
  notifications: 3,
  posts: [],
  userInfo: {
    photoURL: '',
    email: 'kyle@emails',
    location: 'Seattle, WA',
    name: 'Kyle Stevens',
    occupation: 'Janitor',
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
