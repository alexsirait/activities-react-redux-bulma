import { configureStore } from '@reduxjs/toolkit';
import activitySlice from '../features/activitySlice';

export const store = configureStore({
	reducer: {
		activities: activitySlice,
	},
});
