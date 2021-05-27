import styled from 'styled-components';

export const Header = styled.div`
	background-color: #dcdcf6;
	opacity: 0.6;
	background-image: radial-gradient(#0b285d 0.8px, transparent 0.8px),
		radial-gradient(#0b285d 0.8px, #dcdcf6 0.8px);
	background-size: 32px 32px;
	background-position: 0 0, 16px 16px;
`;

export const HeaderContainer = styled.div`
	padding: 25px;
`;

export const HeaderInfo = styled.div`
	margin: 2rem;
`;

export const HeaderTitle = styled.h1`
	font-size: 2rem;
	color: #0b285d;
`;

export const HeaderSubtitle = styled.h5`
	font-size: 1.2rem;
	color: #0b285d;
`;

export const HeaderButton = styled.button`
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;
	border-color: #0b0b0b;
`;
