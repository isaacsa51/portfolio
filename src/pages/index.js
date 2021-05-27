import React, { useState } from 'react';

import Navbar from '../components/navbar';
import Drawer from '../components/navbar/drawer';
import Hero from '../components/hero';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Drawer isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />

			<Hero />
		</>
	);
};

export default Home;
