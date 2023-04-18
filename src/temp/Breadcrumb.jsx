import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ title }) {
	return (
		<nav className="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<Link to="../">Activities App</Link>
				</li>
				<li className="is-active">
					<a href="../">{title}</a>
				</li>
			</ul>
		</nav>
	);
}
