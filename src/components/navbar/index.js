import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
// import { Navbar, Nav } from 'react-bootstrap/';

import {
	Nav,
	NavbarContainer,
	NavBrand,
	NavIcon,
	NavMenu,
	NavLink,
	NavLinks,
	NavItem,
	Bars,
} from './elements';

const NavBar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavBrand to="/">
						<span>Isaac</span>
					</NavBrand>
					<Bars onClick={toggle} />
					<NavMenu>
						<NavLink to="/about" activeStyle>
							About
						</NavLink>
						<NavLink to="/services" activeStyle>
							Services
						</NavLink>
						<NavLink to="/projects" activeStyle>
							Projects
						</NavLink>
						<NavLink to="/contact" activeStyle>
							Contact
						</NavLink>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default NavBar;
