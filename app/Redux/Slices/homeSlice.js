import { createSlice } from '@reduxjs/toolkit';

const posts = [{ id: '001', title: 'First Post', textBody: 'Is this thing on?' }];

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
