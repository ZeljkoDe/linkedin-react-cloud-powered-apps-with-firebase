import React from 'react';
import Header from './Header';
import './App.css';

export default function App() {
	return (
		<div>
			<Header></Header>
			<div className='app'>
				<div className='ui grid container'></div>
			</div>
		</div>
	);
}
