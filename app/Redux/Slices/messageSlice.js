import { createSlice } from '@reduxjs/toolkit';

import { mockMessages } from '../../Utils/mockMessages';

const message = mockMessages;

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    message,
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.push(action.payload);
      return state;
    },
  },
});

const { actions, reducer } = messageSlice;

export const { addMessage } = actions;

export default reducer;
