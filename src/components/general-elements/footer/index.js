import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { _Footer } from './elements';

const Footer = () => {
	return (
		<_Footer>
			<Container>
				<Row class="text-center">
					<Col md={4}>
						<ul class="list-inline quick-links">
							<li class="list-inline-item">
								<a href="#">Home</a>
							</li>
							<li class="list-inline-item">
								<a href="#">About</a>
							</li>
							<li class="list-inline-item">
								<a href="#">Projects</a>
							</li>
							<li class="list-inline-item">
								<a href="#">Contact</a>
							</li>
						</ul>
					</Col>

					<Col md={4}>
						<p>Image</p>
					</Col>

					<Col md={4}>
						<ul class="list-inline social-buttons">
							<li class="list-inline-item">
								<a href="#">
									<i class="fab fa-twitter"></i>
								</a>
							</li>
							<li class="list-inline-item">
								<a href="#">
									<i class="fab fa-facebook-f"></i>
								</a>
							</li>
							<li class="list-inline-item">
								<a href="#">
									<i class="fab fa-linkedin-in"></i>
								</a>
							</li>
						</ul>
					</Col>
				</Row>

				<hr />

				<Row class="text-center">
					<Col md={12}>
						<span class="copyright quick-links">
							Copyright &copy; Isaac Serrano
							<script>document.write(new Date().getFullYear())</script>
						</span>
					</Col>
				</Row>
			</Container>
		</_Footer>
	);
};

export default Footer;
