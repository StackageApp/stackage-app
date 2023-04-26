import { configureStore } from '@reduxjs/toolkit';

import currentUserReducer from '../Slices/currentUserSlice';
import homeSliceReducer from '../Slices/homeSlice';

export default configureStore({
  reducer: {
    homeFeed: homeSliceReducer,
    currentUser: currentUserReducer,
  },
});
