import { createSlice } from '@reduxjs/toolkit';

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
  },
  reducers: {
    returnTwo: (state, action) => {
      state.profile.name = action.payload;
      return state;
    }
  }
})

const { actions, reducer } = profileSlice;

export const { returnTwo } = actions;

export default reducer;
