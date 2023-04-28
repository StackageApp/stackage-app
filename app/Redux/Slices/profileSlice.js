import { createSlice } from '@reduxjs/toolkit';

import { dummyFeed } from '../../Utils/mockPosts';

const posts = dummyFeed;

const profileSlice = createSlice({
  name: 'profileInfo',
  initialState: {
    // profile,
    posts,
  },
  reducers: {
    // updateProfile: (state, action) => {
    //   state.profile = action.payload;
    //   return state;
    // },
    newPostFeed: (state, action) => {
      state.posts = action.payload;
      return state;
    }
  }
})

const { actions, reducer } = profileSlice;

export const { newPostFeed } = actions;

export default reducer;
