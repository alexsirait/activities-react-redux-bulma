import React, { useEffect, useState } from 'react';
import Content from '../temp/Content';
import { useDispatch, useSelector } from 'react-redux';
import { activitySelector, getActivities } from '../features/activitySlice';
import { useParams } from 'react-router-dom';

export default function ShowActivities() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const [status, setStatus] = useState('');
	const [activity, setActivity] = useState('');
	const dataActivity = useSelector((state) =>
		activitySelector.selectById(state, id)
	);
	useEffect(() => {
		dispatch(getActivities());
	}, [dispatch]);

	useEffect(() => {
		if (dataActivity) {
			setStatus(dataActivity.status);
			setActivity(dataActivity.activity);
		}
	}, [dataActivity]);
	return (
		<Content title="Show Activity">
			<section className="hero is-info welcome is-small">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">Hello 👋</h1>
						<h2 className="subtitle">I hope you are having a great day!</h2>
						<span className="mb-4 is-size-4">Activity </span>
						<div>
							<span class="tag is-Primary is-size-3">{activity}</span>
							<span className="is-size-3"> - </span>
							<span class="tag is-Primary is-size-3">{status}</span>
						</div>
					</div>
				</div>
			</section>
		</Content>
	);
}
