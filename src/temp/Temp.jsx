import React from 'react';
import Nav from './Nav';
import Side from './Side';

export default function Temp({ children }) {
	return (
		<>
			<Nav />
			<div className="container">
				<div className="columns">
					<Side />
					<div className="column is-9">{children}</div>
				</div>
			</div>
		</>
	);
}
