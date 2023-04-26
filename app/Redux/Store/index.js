import { configureStore } from '@reduxjs/toolkit';

import currentUserReducer from '../Slices/currentUserSlice';
import homeSliceReducer from '../Slices/homeSlice';
import postViewReducer from '../Slices/postView';

export default configureStore({
  reducer: {
    homeFeed: homeSliceReducer,
    currentUser: currentUserReducer,
    singlePost: postViewReducer,
  },
});
