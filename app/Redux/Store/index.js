import { configureStore } from '@reduxjs/toolkit';

import homeSliceReducer from '../Slices/homeSlice';

export default configureStore({
  reducer: {
    homeFeed: homeSliceReducer,
  },
});
