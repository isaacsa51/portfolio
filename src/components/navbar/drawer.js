import React from 'react';

import {
	DrawerContainer,
	IconContainer,
	CloseIcon,
	DrawerWrapper,
	SidebarMenu,
	SidebarLinks,
} from './elements';

const Drawer = ({ isOpen, toggle }) => {
	return (
		<DrawerContainer isOpen={isOpen} onClick={toggle}>
			<IconContainer onClick={toggle}>
				<CloseIcon />
			</IconContainer>

			<DrawerWrapper>
				<SidebarMenu>
					<SidebarLinks to="about">About</SidebarLinks>
				</SidebarMenu>
				<SidebarMenu>
					<SidebarLinks to="projects">Projects</SidebarLinks>
				</SidebarMenu>
				<SidebarMenu>
					<SidebarLinks to="contact">Contact</SidebarLinks>
				</SidebarMenu>
			</DrawerWrapper>
		</DrawerContainer>
	);
};

export default Drawer;
