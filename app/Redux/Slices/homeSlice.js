import { createSlice } from '@reduxjs/toolkit';

import { dummyPost, emptyPost } from '../../Utils/mockPosts';

const posts = [dummyPost, dummyPost];

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
  },
});

const { actions, reducer } = homeSlice;

export const { returnTwo } = actions;

export default reducer;
