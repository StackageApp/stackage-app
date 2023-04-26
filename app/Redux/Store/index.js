import { configureStore } from '@reduxjs/toolkit';

import homeSliceReducer from '../Slices/homeSlice';
import profileSliceReducer from '../Slices/profileSlice';

export default configureStore({
  reducer: {
    homeFeed: homeSliceReducer,
    profileInfo: profileSliceReducer,
  },
});
