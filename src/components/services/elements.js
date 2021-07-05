import styled from 'styled-components';

export const ServicesWrapper = styled.div`
	margin-bottom: 4em;

	h3 {
		font-family: Karla;
		font-size: 16px;
		text-transform: uppercase;
		font-weight: 700;
	}

	ul li {
		list-style: disc;
		margin-bottom: 10px;

		&::before {
			color: #000;
			display: inline-block;
			width: 1em;
			margin-left: -1em;
		}
	}
`;
