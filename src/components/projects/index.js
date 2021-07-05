import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import {
	OverlayTitle,
	RotatedText,
	IntroHeading,
	Mtb1,
} from '../general-elements';
import { ProjectsWrapper, ServicesWrapper } from './elements';

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
					</Row>

					<Container fluid>
						<Row>
							<Col>
								<RotatedText>
									<h2>Portfolio</h2>
								</RotatedText>
							</Col>
						</Row>
					</Container>

					<Row class="text-center">
						<Col md={10}>
							<ProjectsWrapper>
								<Image src="https://picsum.photos/800/600" fluid />
							</ProjectsWrapper>
						</Col>
					</Row>
				</Container>
			</Mtb1>
		</>
	);
};

export default Projects;
