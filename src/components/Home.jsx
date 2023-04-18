import React from 'react';
import Content from '../temp/Content';

export default function Home() {
	return (
		<Content title="Home">
			<section className="hero is-info welcome is-small">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">Hello 👋</h1>
						<h2 className="subtitle">I hope you are having a great day!</h2>
					</div>
				</div>
			</section>
		</Content>
	);
}
