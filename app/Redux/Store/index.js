import { configureStore } from '@reduxjs/toolkit';

import homeSliceReducer from '../Slices/homeSlice';
import profileSliceReducer from '../Slices/profileSlice';
import messageReducer from '../Slices/messageSlice';
import postViewReducer from '../Slices/postViewSlice';

export default configureStore({
  reducer: {
    homeFeed: homeSliceReducer,
    profileInfo: profileSliceReducer,
    singlePost: postViewReducer,
    message: messageReducer,
  },
});
