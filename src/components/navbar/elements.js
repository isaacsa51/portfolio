import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Nav = styled.nav`
	height: 80px;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem calc((100vw - 1000px) / 2);
	margin-bottom: 100px;
	z-index: 10;
`;

export const NavLink = styled(LinkS)`
	color: #000;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	text-transform: uppercase;
	transition: all 0.3s ease-out;
	text-decoration: none !important;

	&.active {
		color: #9c1428;
	}
`;

export const Bars = styled(AiOutlineMenu)`
	display: none;
	color: #000;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		margin-top: 8px;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: 24px;
	z-index: 1;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
`;

export const NavBrand = styled(LinkR)`
	cursor: pointer;
	letter-spacing: 2px;
	margin-top: 15px;
	text-decoration: none !important;

	span {
		background-color: #000;
		padding-right: 10px;
		padding-left: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
		color: #fff;
		text-transform: uppercase;
		font-size: 1.45rem;
		font-weight: 800;
		text-decoration: none;
		transition: 0.2s ease-in-out;

		&:hover {
			background-color: #9c1428;
			transition: 0.2s ease-in-out;
			text-decoration: none;
		}
	}

	@media screen and (max-width: 992px) {
		margin-left: 20px;
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
