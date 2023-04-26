import { configureStore } from '@reduxjs/toolkit';

import homeSliceReducer from '../Slices/homeSlice';
import postViewReducer from '../Slices/postView';

export default configureStore({
  reducer: {
    homeFeed: homeSliceReducer,
    singlePost: postViewReducer,
  },
});
