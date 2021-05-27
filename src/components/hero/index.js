import React from 'react';

import {
	Header,
	HeaderContainer,
	HeaderInfo,
	HeaderTitle,
	HeaderSubtitle,
	HeaderButton,
} from './elements';

const Hero = () => {
	return (
		<Header>
			<HeaderContainer>
				<HeaderInfo>
					<HeaderTitle>Titulooo</HeaderTitle>
					<HeaderSubtitle>
						lorem ipsum asdfasdfasdfasdasdfasdfasdfasdfasdfasdfasdfasdfasdf
					</HeaderSubtitle>
					<HeaderButton as="a" href="/">
						Let's Start!
					</HeaderButton>
				</HeaderInfo>

				<img src={require('../../assets/header_img.svg')} />
			</HeaderContainer>
		</Header>
	);
};

export default Hero;
