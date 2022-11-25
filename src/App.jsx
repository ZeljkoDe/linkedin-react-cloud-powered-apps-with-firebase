import React from 'react';
import './App.css';
import Header from './components/Header';

export default function App() {
	return (
		<div>
			<Header />
			<div className='app'>
				<div className='ui grid container'></div>
			</div>
		</div>
	);
}
