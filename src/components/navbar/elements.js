import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai';

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
export const DrawerContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #0d0d0d;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
	top: ${({ isOpen }) => (isOpen ? '0%' : '-100%')};
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
		color: #01bf71;
		transition: 0.2s ease-in-out;
		text-decoration: none;
	}
`;
