import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import {
	Nav,
	NavbarContainer,
	NavBrand,
	NavIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './elements';

const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavBrand to="/">isaac</NavBrand>
					<NavIcon onClick={toggle}>
						<AiOutlineMenu />
					</NavIcon>

					<NavMenu>
						<NavItem>
							<NavLinks to="about">About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="projects">Projects</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="contact">Contact</NavLinks>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
