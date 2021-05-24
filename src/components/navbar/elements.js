import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
	background: #fff;
	height: 80px;
	// margin-top: -80px;
	display: flex;
	align-items: center;
	font-size: 1rem;
	top: 0;
	position: sticky;
	z-index: 10;

	@media screen adn (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100 px;
`;

export const NavIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.5rem;
		cursor: pointer;
		color: #000;
	}
`;

export const NavMenu = styled.ul`
	float: left;
	right: 80px;
	position: fixed;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	padding-left: 40px;
	display: inline-block;
	cursor: pointer;
	font-weight: 300;
	line-height: 80px;
	position: relative;
	transition: all 0.3s ease-out;
`;

export const NavLinks = styled(LinkS)`
	color: #000;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		font-weight: bold;
	}
`;

export const NavBrand = styled(LinkR)`
	color: #000;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
`;

// Side drawer
