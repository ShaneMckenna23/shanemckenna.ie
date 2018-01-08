import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header/Header'
import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import config from '../../config/SiteConfig'

export default class About extends React.Component {
	render() {
		return (
			<div className="container about-container">
				<Helmet title={`About | ${config.siteTitle}`} />
				<Header>About</Header>
				<Container text>
					<h1>Hi!</h1>
					<p>
					I am Shane Mckenna, a twenty-one-year-old student from Kerry. 
					I study Computer Games Development at the University of Limerick. 
					I have a passion for web development. I find development fun and it 
					allows me to be creative. I'm constantly learning new and exciting 
					technologies.
					</p>
				</Container>
				<Footer />
			</div>
		)
	}
}
