import React from 'react'
import Header from '../components/Header/Header'
import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import Link from 'gatsby-link'

const NotFoundPage = () => (
	<div className="container contact-container">
				<Header>404 - Page Note Found</Header>
				<Container text>
					<h2>Here are some helpful links instead:</h2>
						<div><Link to="/">Home</Link></div>
						<div><Link to="/about">About</Link></div>
						<div><Link to="/contact/">Contact</Link></div>
				</Container>
				<Footer />
			</div>
)

export default NotFoundPage
