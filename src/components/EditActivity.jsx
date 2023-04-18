import React, { useEffect, useState } from 'react';
import Content from '../temp/Content';
import { useDispatch, useSelector } from 'react-redux';
import {
	activitySelector,
	getActivities,
	updateActivities,
} from '../features/activitySlice';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditActivity() {
	const [activity, setActivity] = useState('');
	const [status, setStatus] = useState('');
	const dispatch = useDispatch();
	const nav = useNavigate();
	const { id } = useParams();

	const activityData = useSelector((state) =>
		activitySelector.selectById(state, id)
	);
	useEffect(() => {
		if (activityData) {
			setActivity(activityData.activity);
			setStatus(activityData.status);
		}
	}, [activityData]);
	useEffect(() => {
		dispatch(getActivities());
	}, [dispatch]);

	const onSubmit = async (e) => {
		e.preventDefault();
		await dispatch(updateActivities({ id, activity, status }));
		nav('/activities');
	};
	return (
		<Content title="Edit Activity">
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
				<div className="field">
					<label className="label">Status</label>
					<div class="select">
						<select value={status} onChange={(e) => setStatus(e.target.value)}>
							<option>not finished yet</option>
							<option>do it now</option>
							<option>as soon as possible</option>
							<option>some time</option>
						</select>
					</div>
				</div>
				<button className="button is-link">Submit</button>
			</form>
		</Content>
	);
}
