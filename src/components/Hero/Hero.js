import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Hero.module.scss'
import Typist from 'react-typist'
import HomePageHeaderButtons from '../HomepageHeaderButtons'

class Hero extends Component {
	render () {
		const { onHeadingTyped, typed } = this.props

		return (
			<div className={styles.hero}>
				<div className={styles.heroSectionText}>
					<Typist onTypingDone={onHeadingTyped}>Hey! My name is Shane</Typist>
				</div>
				<HomePageHeaderButtons headingTyped={typed} />
			</div>
		)
	}
}

Hero.propTypes = {
	onHeadingTyped: PropTypes.func,
	typed: PropTypes.bool,
}

export default Hero