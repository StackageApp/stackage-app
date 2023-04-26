import { configureStore } from '@reduxjs/toolkit';

import homeSliceReducer from '../Slices/homeSlice';
import profileSliceReducer from '../Slices/profileSlice';
import postViewReducer from '../Slices/postView';

export default configureStore({
  reducer: {
    homeFeed: homeSliceReducer,
    profileInfo: profileSliceReducer,
    singlePost: postViewReducer,
  },
});
