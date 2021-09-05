import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import {
	OverlayTitle,
	RotatedText,
	IntroHeading,
	Mtb1,
} from '../general-elements';
import Slider from '../general-elements/slider';

const Projects = () => {
	return (
		<>
			<Mtb1>
				<Container>
					<Row class="text-center">
						<OverlayTitle>Projects</OverlayTitle>
					</Row>

					<Row>
						<Col md={12}>
							<IntroHeading class="text-center">
								<span class="text-center">Portfolio</span>
								<h2 class="text-center">Completed Projects</h2>
							</IntroHeading>
						</Col>

						<Col className="d-none d-md-block">
							<RotatedText>
								<h2>Portfolio</h2>
							</RotatedText>
						</Col>
					</Row>

					<Row></Row>

					<Row>
						<Col md={{ span: 11, offset: 1 }}>
							<Slider />
						</Col>
					</Row>
				</Container>
			</Mtb1>
		</>
	);
};

export default Projects;
