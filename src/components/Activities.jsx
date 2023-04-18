import React, { useEffect } from 'react';
import Content from '../temp/Content';
import { useDispatch, useSelector } from 'react-redux';
import {
	activitySelector,
	destroyActivity,
	getActivities,
} from '../features/activitySlice';
import { Link } from 'react-router-dom';

export default function Activities() {
	const dispatch = useDispatch();
	const activity = useSelector((state) => activitySelector.selectAll(state));
	useEffect(() => {
		dispatch(getActivities());
	}, [dispatch]);
	return (
		<Content title="Activities">
			<table className="table is-striped is-fullwidth">
				<thead>
					<tr>
						<td>#</td>
						<td>Activity</td>
						<td>Status</td>
						<td>Action</td>
					</tr>
				</thead>
				<tbody>
					{activity.map((a, i) => (
						<tr key={i}>
							<td>{++i}</td>
							<td>{a.activity}</td>
							<td>
								<span
									className={`tag ${
										a.status === 'not finished yet' && 'is-danger'
									} ${a.status === 'do it now' && 'is-success'} ${
										a.status === 'as soon as possible' && 'is-info'
									} ${a.status === 'some time' && 'is-warning'}`}
								>
									{a.status}
								</span>
							</td>
							<td>
								<Link
									to={`/show-activity/${a.id}`}
									className="button is-info is-small"
								>
									Show
								</Link>
								<Link
									to={`/edit-activity/${a.id}`}
									className="button is-warning is-small"
								>
									Edit
								</Link>
								<button
									onClick={async () => await dispatch(destroyActivity(a.id))}
									className="button is-danger is-small"
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Content>
	);
}
