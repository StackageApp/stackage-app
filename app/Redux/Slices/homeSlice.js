import { createSlice } from '@reduxjs/toolkit';

import { dummyFeed, dummyPost } from '../../Utils/mockPosts';

const posts = dummyFeed;

const homeSlice = createSlice({
  name: 'homeFeed',
  initialState: {
    posts,
  },
  reducers: {
    newMessages: (state, action) => {
      state.posts = action.payload;
      return state;
    },
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
    filterHot: (state, action) => {
      const currentTime = Math.floor(new Date().getTime() / 1000);
      const dayBefore = currentTime - 86400;

      function getTimeOfPost(timestamp) {
        const time = Math.floor(new Date(timestamp).getTime() / 1000);
        return time;
      }

      if (state.posts) {
        state.posts = state.posts.filter((post) => {
          const timeOfPost = getTimeOfPost(post.timestamp);
          if (post.likes > 5 && dayBefore - timeOfPost < 86400) {
            return post;
          }
        });
        return state;
      }
    },
  },
});

const { actions, reducer } = homeSlice;

export const { filterCategory, filterHot, filterTop, newMessages } = actions;

export default reducer;
