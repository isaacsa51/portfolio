import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/fonts.css';
import './App.css';

import Home from './pages/';

function App() {
	return (
		<Router>
			<Home />
		</Router>
	);
}

export default App;
