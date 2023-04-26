import { createSlice } from '@reduxjs/toolkit';

import { dummyPost, dummyPost2, emptyPost } from '../../Utils/mockPosts';

const posts = [dummyPost, dummyPost2];

const homeSlice = createSlice({
  name: 'homeFeed',
  initialState: {
    posts,
  },
  reducers: {
    filterCategory: (state, action) => {
      if (state.posts) {
        state.posts = state.posts.filter((post) => post.category === action.payload);
        return state;
      }
    },
    filterTop: (state, action) => {
      if (state.posts) {
        state.posts = state.posts.filter((post) => post.likes > action.payload);
        return state;
      }
    },
  },
});

const { actions, reducer } = homeSlice;

export const { filterCategory, filterTop } = actions;

export default reducer;
