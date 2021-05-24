import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/navbar';

function App() {
	return (
		<Router>
			<Navbar />
		</Router>
	);
}

export default App;
