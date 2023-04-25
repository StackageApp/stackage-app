import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ id: '1', title: 'First Post', textBody: 'Is this thing on?' }];

const homeSlice = createSlice({
  name: 'homeFeed',
  initialState,
  reducers: {
    newMessages: (state) => {
      state.id = '2';
    },
  },
});

export default homeSlice.reducer;
