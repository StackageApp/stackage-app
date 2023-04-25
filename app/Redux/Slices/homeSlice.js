import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ id: '1', title: 'First Post', textBody: 'Is this thing on?' }];

const homeSlice = createSlice({
  name: 'homeFeed',
  initialState,
  reducers: {},
});

export default homeSlice.reducer;
