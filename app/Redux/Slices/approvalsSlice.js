import { createSlice } from '@reduxjs/toolkit';

import { emptyFeed } from '../../Utils/mockPosts';

const posts = emptyFeed;

const approvalsSlice = createSlice({
  name: 'approvalsFeed',
  initialState: {
    posts,
  },
  reducers: {
    approvalsPost: (state, action) => {
      state.posts = state.posts.filter((post) => {
        !post.isApproved === action.payload;
      });
      return state;
    },
  },
});

const { actions, reducer } = approvalsSlice;

export const { approvalsPost } = actions;

export default reducer;
