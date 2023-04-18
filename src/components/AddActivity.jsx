import React, { useState } from 'react';
import Content from '../temp/Content';
import { useDispatch } from 'react-redux';
import { storeActivity } from '../features/activitySlice';
import { useNavigate } from 'react-router-dom';

export default function AddActivity() {
	const [activity, setActivity] = useState('');
	const status = 'not finished yet';
	const nav = useNavigate();
	const dispatch = useDispatch();
	const onSubmit = async (e) => {
		e.preventDefault();
		await dispatch(storeActivity({ activity, status }));
		nav('/activities');
	};

	return (
		<Content title="Add Activity">
			<form onSubmit={onSubmit}>
				<div className="field">
					<label className="label">Activity</label>
					<div className="control">
						<input
							className="input"
							type="text"
							placeholder="Enter Activity .."
							value={activity}
							onChange={(e) => setActivity(e.target.value)}
						/>
					</div>
				</div>
				<button className="button is-link">Submit</button>
			</form>
		</Content>
	);
}
