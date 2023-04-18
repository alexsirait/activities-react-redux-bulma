import React from 'react';
import { Link } from 'react-router-dom';

export default function Side() {
	return (
		<div className="column is-3 ">
			<aside className="menu is-hidden-mobile">
				<p className="menu-label">General</p>
				<ul className="menu-list">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/activities">Activities</Link>
					</li>
					<li>
						<Link to="/add-activity">Add Activity</Link>
					</li>
				</ul>
			</aside>
		</div>
	);
}
