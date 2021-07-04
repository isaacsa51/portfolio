import styled from 'styled-components';

export const OverlayTitle = styled.h2`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	font-size: 250px;
	color: #f0f0f0;
	font-weight: 700;
	font-family: Playfair Display;

	@media screen and (max-width: 768px) {
		font-size: 60px;
	}
`;

export const RotatedText = styled.div`
	position: absolute;
	top: 6em;
	left: 2em;

	h2 {
		font-family: Karla;
		font-size: 14px;
		text-transform: uppercase;
		letter-spacing: 1em;
		-webkit-transform: rotate(90deg);
		-moz-transform: rotate(90deg);
		-ms-transform: rotate(90deg);
		-o-transform: rotate(90deg);
		transform: rotate(90deg);
		-webkit-transform-origin: left top 0;
		-ms-transform-origin: left top 0;
		transform-origin: left top 0;
		position: relative;

		&:after {
			position: absolute;
			top: 8px;
			right: -40px;
			content: '';
			background: #000;
			width: 40px;
			height: 1px;
		}
	}
`;
