import { configureStore } from '@reduxjs/toolkit';

import homeSliceReducer from '../Slices/homeSlice';
import postReducer from '../Slices/postSlice';

export default configureStore({
  reducer: {
    homeFeed: homeSliceReducer,
    singlePost: postReducer,
  },
});
