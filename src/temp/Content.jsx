import React from 'react';
import Breadcrumb from '../temp/Breadcrumb';
import Temp from './Temp';

export default function Content({ children, title }) {
	return (
		<Temp>
			<Breadcrumb title={title} />
			<main>{children}</main>
		</Temp>
	);
}
