import React from 'react';
import 'bulma/css/bulma.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Activities from './components/Activities';
import AddActivity from './components/AddActivity';
import EditActivity from './components/EditActivity';
import ShowActivity from './components/ShowActivity';
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<Home />} />
				<Route path="activities" element={<Activities />} />
				<Route path="add-activity" element={<AddActivity />} />
				<Route path="edit-activity/:id" element={<EditActivity />} />
				<Route path="show-activity/:id" element={<ShowActivity />} />
			</Routes>
		</BrowserRouter>
	);
}
