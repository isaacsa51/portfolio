import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import {
	OverlayTitle,
	RotatedText,
	IntroHeading,
	Mtb1,
} from '../general-elements';
import { ServicesWrapper } from './elements';

const Services = () => {
	return (
		<>
			<Mtb1>
				<Container>
					<Row class="text-center">
						<OverlayTitle>Services</OverlayTitle>
					</Row>

					<Col md={12}>
						<Row>
							<Col md={{ span: 12, offset: 0 }}>
								<IntroHeading>
									<span>My Services</span>
									<h2>Skills adquired</h2>
								</IntroHeading>
							</Col>
						</Row>

						<Row>
							<Col md={12}>
								<RotatedText>
									<h2>Services</h2>
								</RotatedText>
							</Col>

							<Col md={{ span: 5, offset: 1 }}>
								<ServicesWrapper>
									<h3>1 - Android Development</h3>
									<ul>
										<li>Kotlin</li>
										<li>Unit Testing</li>
										<li>Coroutines</li>
										<li>Android Jetpack</li>
									</ul>
								</ServicesWrapper>

								<ServicesWrapper>
									<h3>2 - Front End Development</h3>
									<ul>
										<li>UI Design</li>
										<li>ReactJS</li>
										<li>Bootstrap</li>
										<li>SASS</li>
									</ul>
								</ServicesWrapper>
							</Col>

							<Col md={6}>
								<ServicesWrapper>
									<h3>3 - Clean Code/Clean Arquitecture</h3>
									<ul>
										<li>MVVM</li>
										<li>MVC</li>
										<li>SOLID Principles</li>
										<li>OOP</li>
									</ul>
								</ServicesWrapper>
								<ServicesWrapper>
									<h3>
										4 - Mobile Development <i>Hybrid</i>
									</h3>
									<ul>
										<li>React Native</li>
										<li>Hooks</li>
										<li>Redux</li>
										<li>Firebase</li>
									</ul>
								</ServicesWrapper>
							</Col>
						</Row>
					</Col>
				</Container>
			</Mtb1>
		</>
	);
};

export default Services;
