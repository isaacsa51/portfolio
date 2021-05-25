import React, { useState } from 'react';

import Navbar from '../components/navbar';
import Drawer from '../components/navbar/drawer';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Drawer isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />

			<div>
				<h1 style={{ textAlign: 'center' }}>
					No sabes lo mucho que te quiero{' '}
					<span
						style={{
							backgroundColor: '#244a9e',
							color: '#fff',
							fontWeight: 'bold',
							fontStyle: 'italic',
						}}
					>
						Yosselin!
					</span>
				</h1>
			</div>
		</>
	);
};

export default Home;
