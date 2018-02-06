import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header/Header'
import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import config from '../../config/SiteConfig'

export default class Contact extends React.Component {
	render() {
		return (
			<div className="container contact-container">
				<Helmet title={`Contact | ${config.siteTitle}`} />
				<Header>Contact</Header>
				<Container text>
					<h1>E-mail</h1>
					<p>Shanemckenna23@hotmail.co.uk</p>
					<h1>Mobile</h1>
					<p>087-331-4847</p>
				</Container>
				<Footer />
			</div>
		)
	}
}
