import { createSlice } from '@reduxjs/toolkit';

import { dummyFeed } from '../../Utils/mockPosts';

const posts = dummyFeed;

const profile = {
  email: 'kyleastevens3@gmail.com',
  location: 'Seattle, WA',
  name: 'Kyle Stevens',
  occupation: 'Janitor'
}

const profileSlice = createSlice({
  name: 'profileInfo',
  initialState: {
    profile,
    posts,
  },
  reducers: {
    newProfile: (state, action) => {
      state.profile = action.payload;
      return state;
    }
  }
})

const { actions, reducer } = profileSlice;

export const { newProfile } = actions;

export default reducer;
