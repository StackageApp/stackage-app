import { createSlice } from '@reduxjs/toolkit';

import { dummyPost, dummyPost2, emptyPost } from '../../Utils/mockPosts';

const posts = [dummyPost, dummyPost2];

const homeSlice = createSlice({
  name: 'homeFeed',
  initialState: {
    posts,
  },
  reducers: {
    returnTwo: (state, action) => {
      state.posts[0].id = action.payload;
      return state;
    },
    filterTop: (state, action) => {
      [...state];
    },
  },
});

const { actions, reducer } = homeSlice;

export const { returnTwo } = actions;

export default reducer;
