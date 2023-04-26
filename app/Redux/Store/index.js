import { configureStore } from '@reduxjs/toolkit';

import homeSliceReducer from '../Slices/homeSlice';
import messageReducer from '../Slices/messageSlice';
import postViewReducer from '../Slices/postView';

export default configureStore({
  reducer: {
    homeFeed: homeSliceReducer,
    singlePost: postViewReducer,
    message: messageReducer,
  },
});
