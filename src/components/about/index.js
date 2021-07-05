import React from 'react';
import { Container, Image, Row, Col, Carousel } from 'react-bootstrap';
import TypeWriterEffect from 'react-typewriter-effect';

import { OverlayTitle, PrimaryBtn, RotatedText } from '../general-elements';
import { AboutDesc, AboutInfo } from './elements';

const About = () => {
	return (
		<>
			<Container>
				<Row class="text-center">
					<OverlayTitle>About</OverlayTitle>
				</Row>

				<Row>
					<Col md={5}>
						<Carousel fade controls={false} indicators={false}>
							<Carousel.Item>
								<Image src="https://picsum.photos/400/600?grayscale" fluid />
							</Carousel.Item>
							<Carousel.Item>
								<Image src="https://picsum.photos/400/600?blur" fluid />
							</Carousel.Item>
						</Carousel>
					</Col>
					<Col md={7}>
						<AboutDesc>
							<TypeWriterEffect
								textStyle={{
									fontFamily: 'Playfair Display',
									fontSize: '3.125rem',
									color: '#000',
								}}
								startDelay={2000}
								cursorColor="#3F3D56"
								multiText={[
									`Isaac Serrano`,
									`I'm a Mobile Developer`,
									`I'm a Software Developer`,
									`Isaac Serrano`,
								]}
								multiTextDelay={2000}
								typeSpeed={100}
								loop={true}
							/>

							<AboutInfo>
								<RotatedText>
									<h2>About</h2>
								</RotatedText>

								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Adipisci quibusdam eligendi fuga quam nobis fugit mollitia
									molestias, velit minima quisquam nostrum ullam odio. Minima,
									nam laudantium enim magnam corporis fugit! Ut dolores, laborum
									doloribus ullam necessitatibus non accusamus porro nesciunt
									aut eos iste, labore rerum. Maiores quos enim consectetur,
									amet ex quasi id asperiores repudiandae deleniti laborum
									perferendis assumenda rem?
								</p>

								<PrimaryBtn>Contact me!</PrimaryBtn>
							</AboutInfo>
						</AboutDesc>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default About;
