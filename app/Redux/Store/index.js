import { configureStore } from '@reduxjs/toolkit';

import homeFeedReducer from '../Slices/homeSlice';

export default configureStore({
  reducer: {
    homeFeed: homeFeedReducer,
  },
  // maybe look at middleware
});
