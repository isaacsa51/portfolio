import styled from 'styled-components';

export const Mtb1 = styled.div`
	margin-top: 10rem;
	margin-bottom: 10rem;
`;

export const OverlayTitle = styled.h1`
	position: absolute;
	left: 0;
	right: 0;
	font-size: 250px;
	margin-top: -160px;
	color: #f0f0f0;
	font-weight: 700;
	text-align: center;
	font-family: Playfair Display;
	z-index: -1;

	@media screen and (max-width: 768px) {
		font-size: 72px;
		padding-top: 80px;
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

export const PrimaryBtn = styled.button`
	background-color: transparent;
	color: #4d4d4d;
	border: 1px solid #d9d9d9;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 0.813rem;
	line-height: 1.5;
	padding: 0.375rem 0.75rem;
	transition: 0.5s ease-in-out;

	&:hover {
		background-color: #c4495b;
		border: 1px solid #c4495b;
		transition: 0.5s ease-in-out;
		color: #fff;
	}
`;

export const IntroHeading = styled.div`
	margin-bottom: 3em;

	h2 {
		font-size: 34px;
		font-weight: 400;
		line-height: 1.5;
		margin-bottom: 1.5em;
		color: #000;
		position: relative;
	}

	span {
		display: block;
		text-transform: uppercase;
		font-size: 12px;
		letter-spacing: 3px;
		margin-bottom: 10px;
		color: #bfbfbf;
		font-weight: 600;
	}
`;
