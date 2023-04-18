import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const getActivities = createAsyncThunk(
	'activities/getActivities',
	async () => {
		const res = await axios.get('http://localhost:5000/activities');
		return await res.data;
	}
);

export const storeActivity = createAsyncThunk(
	'activities/storeActivity',
	async ({ activity, status }) => {
		const res = await axios.post('http://localhost:5000/activities', {
			activity,
			status,
		});
		return await res.data;
	}
);

export const updateActivities = createAsyncThunk(
	'activities/updateActivities',
	async ({ id, activity, status }) => {
		const res = await axios.put(`http://localhost:5000/activities/${id}`, {
			activity,
			status,
		});
		return await res.data;
	}
);

export const destroyActivity = createAsyncThunk(
	'activities/destroyActivity',
	async (id) => {
		await axios.delete(`http://localhost:5000/activities/${id}`);
		return id;
	}
);

const activityEntity = createEntityAdapter({
	selectId: (activity) => activity.id,
});

const activitySlice = createSlice({
	name: 'activities',
	initialState: activityEntity.getInitialState,
	extraReducers: {
		[getActivities.fulfilled]: (state, action) => {
			activityEntity.setAll(state, action.payload);
		},
		[storeActivity.fulfilled]: (state, action) => {
			activityEntity.addOne(state, action.payload);
		},
		[destroyActivity.fulfilled]: (state, action) => {
			activityEntity.removeOne(state, action.payload);
		},
		[updateActivities.fulfilled]: (state, action) => {
			activityEntity.updateOne(state, {
				id: action.payload.id,
				update: action.payload,
			});
		},
	},
});

export const activitySelector = activityEntity.getSelectors(
	(state) => state.activities
);
export default activitySlice.reducer;
