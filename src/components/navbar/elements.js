import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai';

export const Nav = styled.nav`
	height: 60px;
	margin-bottom: 60px;
	display: flex;
	align-items: center;
	font-size: 1rem;
	z-index: 10;

	@media screen and (max-width: 960px) {
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
	max-width: 1100px;
`;

export const NavIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		margin-top: -2px;
		transform: translate(-100%, 60%);
		font-size: 1.5rem;
		cursor: pointer;
		color: #000;
	}
`;

export const NavMenu = styled.ul`
	float: left;
	right: '100%';
	padding-top: 5px;
	letter-spacing: 1px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	padding-left: 40px;
	display: inline-block;
	position: relative;
	cursor: pointer;
	font-weight: 400;
	line-height: 100px;
	text-transform: uppercase;
	transition: all 0.3s ease-out;
	text-decoration: none;
	left: 50%;
`;

export const NavLinks = styled(LinkS)`
	color: #000;
	display: flex;
	align-items: center;
	text-decoration: none !important;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		font-weight: bold;
	}
`;

export const NavBrand = styled(LinkR)`
	justify-self: flex-start;
	cursor: pointer;
	display: flex;
	align-items: center;
	margin-top: 72px;
	text-decoration: none !important;

	span {
		background-color: #000;
		padding-right: 10px;
		padding-left: 10px;
		color: #fff;
		text-transform: uppercase;
		font-size: 1.5rem;
		font-weight: 800;
		text-decoration: none;
		font-family: Karla;
		transition: 0.2s ease-in-out;

		&:hover {
			background-color: #9c1428;
			transition: 0.2s ease-in-out;
			text-decoration: none;
		}
	}
`;

// Side drawer
export const DrawerContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 75%;
	height: 100%;
	background: #000;
	display: grid;
	align-items: center;
	top: 0;
	right: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
	right: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};
`;

export const CloseIcon = styled(AiOutlineClose)`
	color: #fff;
	font-size: 1.2rem;
`;

export const IconContainer = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	cursor: pointer;
	outline: none;
`;

export const DrawerWrapper = styled.div`
	color: #fff;
`;

export const SidebarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(1, 80px);
	text-align: center;
	font-family: Playfair Display;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(1, 60px);
	}
`;

export const SidebarLinks = styled(LinkS)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	text-decoration: none;
	color: #fff;
	cursor: pointer;

	&:hover {
		color: #9c1428;
		transition: 0.2s ease-in-out;
		text-decoration: none;
	}
`;
