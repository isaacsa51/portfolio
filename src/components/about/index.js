import React from 'react';
import { Container, Image, Row, Col, Carousel } from 'react-bootstrap';
import TypeWriterEffect from 'react-typewriter-effect';

import { OverlayTitle, PrimaryBtn, RotatedText } from '../general-elements';
import { AboutDesc, AboutInfo } from './elements';
import ProfilePhoto from '../../assets/main_profile.jpg';

const About = () => {
	return (
		<>
			<Container>
				<Row class="text-center">
					<OverlayTitle>About</OverlayTitle>
				</Row>

				<Row>
					<Col md={5}>
						<img
							className="d-block w-100"
							src={ProfilePhoto}
							alt="Second slide"
						/>
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
									A person that always seeks to bring high quality and solid
									solutions in each project in mind or hand.
								</p>
								<p>
									Focusing on learning & mastering mobile app development with
									the use of native technologies with the use of Kotlin or
									hybrid technologies with React-Native. SOLID principles, agile
									development, design patterns studied, practiced & mastered in:
									CubicCoding, Hackademymx & Polytechnic University of Sinaloa.
								</p>
								<p>
									Programming technician since 2018. Besides having experience
									in motion graphics in the 2D area and simple logo design.
								</p>

								<PrimaryBtn>Contact me</PrimaryBtn>
							</AboutInfo>
						</AboutDesc>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default About;
