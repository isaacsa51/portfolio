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
			{/* <Nav>
				<NavbarContainer>
					<NavBrand to="/">
						<span>Isaac</span>
					</NavBrand>
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
			</Nav> */}

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
						<NavLink to="/contact-us" activeStyle>
							Contact Us
						</NavLink>
						<NavLink to="/sign-up" activeStyle>
							Sign Up
						</NavLink>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default NavBar;
