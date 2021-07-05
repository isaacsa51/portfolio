import React, { useState } from 'react';

import NavBar from '../components/navbar';
import Drawer from '../components/navbar/drawer';
import About from '../components/about';
import Services from '../components/services';
import Projects from '../components/projects';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Drawer isOpen={isOpen} toggle={toggle} />
			<NavBar toggle={toggle} />

			<About />
			<Services />
			<Projects />
		</>
	);
};

export default Home;
