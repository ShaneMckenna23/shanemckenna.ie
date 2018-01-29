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
					<h1>Hello!</h1>
					<p>
						My name is Shane Mckenna, I'm a 21-year-old web developer from a small town in Ireland. 
						I will graduate from college this year. I have a passion for web development, I'm constantly 
						learning new and exciting technologies.
					</p>
					<p>
						I am very passionate when it comes to music. I love live music and the atmosphere it creates, for this reason, I go 
						to concerts any chance I get. I am very easy to get along with and I believe I collaborate well with others.
					</p>
					<p>
						Looking for a Full-time web development role with a September start-date. I'm willing to move anywhere for the right 
						position! I have both EU and USA citizenship.
					</p>
				</Container>
				<Footer />
			</div>
		)
	}
}
