import { createSlice } from '@reduxjs/toolkit';

import { dummyFeed, emptyFeed } from '../../Utils/mockPosts';

const posts = dummyFeed;

const homeSlice = createSlice({
  name: 'homeFeed',
  initialState: {
    posts,
  },
  reducers: {
    newPosts: (state, action) => {
      state.posts = action.payload;
      return state;
    },
    filterCategory: (state, action) => {
      state.posts = state.posts.filter((post) => post.category === action.payload);
      return state;
    },
    filterTop: (state, action) => {
      state.posts = state.posts.filter((post) => post.likes > action.payload);
      return state;
    },
    filterHot: (state, action) => {
      const currentTime = action.payload / 1000;
      state.posts = state.posts.filter((post) => {
        const timeOfPost = post.timestamp / 1000;
        if (post.likes > 5 && currentTime - timeOfPost < 86400) {
          return post;
        }
      });
      return state;
    },
  },
});

const { actions, reducer } = homeSlice;

export const { filterCategory, filterHot, filterTop, newPosts } = actions;

export default reducer;
