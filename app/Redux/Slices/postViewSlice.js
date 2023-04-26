import { createSlice } from '@reduxjs/toolkit';

import { dummyPost, emptyPost } from '../../Utils/mockPosts';

const post = dummyPost;

const homeSlice = createSlice({
  name: 'post',
  initialState: {
    post,
  },
  reducers: {
    newPost: (state, action) => {
      state = action.payload;
    },
  },
});

const { actions, reducer } = homeSlice;

export const { newPost } = actions;

export default reducer;
