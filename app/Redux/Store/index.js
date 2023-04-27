import { configureStore } from '@reduxjs/toolkit';

import currentUserReducer from '../Slices/currentUserSlice';
import homeSliceReducer from '../Slices/homeSlice';
import messageReducer from '../Slices/messageSlice';
import postViewReducer from '../Slices/postViewSlice';
import profileSliceReducer from '../Slices/profileSlice';

export default configureStore({
  reducer: {
    homeFeed: homeSliceReducer,
    currentUser: currentUserReducer,
    profileInfo: profileSliceReducer,
    singlePost: postViewReducer,
    message: messageReducer,
  },
});
