import React, { useState, useEffect } from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import { PrimaryBtn } from '../../general-elements';
import { Section, Con } from '../../projects/elements';
import './slider.css';
import styles from './styles';

const Slider = () => {
	const [hover, setHover] = useState(false);
	const [matchs, setMatchs] = useState(
		window.matchMedia('(min-width: 991px)').matches
	);

	useEffect(() => {
		const handler = (e) => setMatchs(e.matches);
		window.matchMedia('(min-width: 991px)').addListener(handler);
	}, []);

	return (
		<Container>
			<Row>
				<Section>
					{matchs && (
						<Carousel fade indicators={false}>
							<Carousel.Item
								onMouseEnter={() => setHover(true)}
								onMouseLeave={() => setHover(false)}
							>
								<img
									className="d-block w-100"
									src="https://picsum.photos/800/400?blur"
									alt="First slide"
								/>

								<a
									href="/#"
									style={{
										textDecoration: 'none',
										color: '#fff',
										cursor: 'pointer',
									}}
								>
									<Carousel.Caption
										style={{
											...styles.normal,
											...(hover ? styles.hover : null),
										}}
									>
										<h4 style={{ color: '#fff' }}>First slide label</h4>
										<p>
											Nulla vitae elit libero, a pharetra augue mollis interdum.
										</p>
									</Carousel.Caption>
								</a>
							</Carousel.Item>
							<Carousel.Item
								onMouseEnter={() => setHover(true)}
								onMouseLeave={() => setHover(false)}
							>
								<img
									className="d-block w-100"
									src="https://picsum.photos/800/400?blur"
									alt="Second slide"
								/>

								<a
									href="/#"
									style={{
										textDecoration: 'none',
										color: '#fff',
										cursor: 'pointer',
									}}
								>
									<Carousel.Caption
										style={{
											...styles.normal,
											...(hover ? styles.hover : null),
										}}
									>
										<h4 style={{ color: '#fff' }}>Second slide label</h4>
										<p>
											Nulla vitae elit libero, a pharetra augue mollis interdum.
										</p>
									</Carousel.Caption>
								</a>
							</Carousel.Item>
							<Carousel.Item
								onMouseEnter={() => setHover(true)}
								onMouseLeave={() => setHover(false)}
							>
								<img
									className="d-block w-100"
									src="https://picsum.photos/800/400?blur"
									alt="Third slide"
								/>

								<a
									href="/#"
									style={{
										textDecoration: 'none',
										color: '#fff',
										cursor: 'pointer',
									}}
								>
									<Carousel.Caption
										style={{
											...styles.normal,
											...(hover ? styles.hover : null),
										}}
									>
										<h4 style={{ color: '#fff' }}>Third slide label</h4>
										<p>
											Nulla vitae elit libero, a pharetra augue mollis interdum.
										</p>
									</Carousel.Caption>
								</a>
							</Carousel.Item>
						</Carousel>
					)}

					{!matchs && (
						<Carousel fade indicators={false}>
							<Carousel.Item
								onMouseEnter={() => setHover(true)}
								onMouseLeave={() => setHover(false)}
							>
								<img
									className="d-block w-100"
									src="https://picsum.photos/800/400?blur"
									alt="First slide"
								/>

								<a
									href="/#"
									style={{
										textDecoration: 'none',
										color: '#fff',
										cursor: 'pointer',
									}}
								>
									<Carousel.Caption
										style={{
											...styles.normalSml,
											...(hover ? styles.hoverSmal : null),
										}}
									>
										<h5 style={{ color: '#fff', margin: 0 }}>
											First slide label
										</h5>
									</Carousel.Caption>
								</a>
							</Carousel.Item>
							<Carousel.Item
								onMouseEnter={() => setHover(true)}
								onMouseLeave={() => setHover(false)}
							>
								<img
									className="d-block w-100"
									src="https://picsum.photos/800/400?blur"
									alt="Second slide"
								/>

								<a
									href="/#"
									style={{
										textDecoration: 'none',
										color: '#fff',
										cursor: 'pointer',
									}}
								>
									<Carousel.Caption
										style={{
											...styles.normalSml,
											...(hover ? styles.hoverSmal : null),
										}}
									>
										<h5 style={{ color: '#fff', margin: 0 }}>
											Second slide label
										</h5>
									</Carousel.Caption>
								</a>
							</Carousel.Item>
						</Carousel>
					)}
				</Section>
			</Row>
		</Container>
	);
};

export default Slider;
