import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<nav className="navbar is-white">
			<div className="container">
				<div className="navbar-brand">
					<span className="navbar-item brand-text">Activities App</span>
					<div className="navbar-burger burger" data-target="navMenu">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div id="navMenu" className="navbar-menu">
					<div className="navbar-start">
						<Link to="/" className="navbar-item">
							Home
						</Link>
						<Link to="/activities" className="navbar-item">
							Activities
						</Link>
						<Link to="/add-activity" className="navbar-item">
							Add Activity
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
