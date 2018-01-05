import React, { Component } from 'react'
import Hero from '../Hero/Hero'

class HeroContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			typed: false,
		}
		this.handleHeadingTyped = this.handleHeadingTyped.bind(this)
	}

	handleHeadingTyped() {
		this.setState({
			typed: true,
		})
	}

	render() {
		const { typed } = this.state
		return (
			<Hero
				{...this.props}
				typed={typed}
				onHeadingTyped={this.handleHeadingTyped}
			/>
		)
	}
}

export default HeroContainer
