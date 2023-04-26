import { configureStore } from '@reduxjs/toolkit';

import homeSliceReducer from '../Slices/homeSlice';
import postViewReducer from '../Slices/postViewSlice';

export default configureStore({
  reducer: {
    homeFeed: homeSliceReducer,
    singlePost: postViewReducer,
  },
});
