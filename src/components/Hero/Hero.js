import React, { Component } from 'react'
import styles from './Hero.module.scss'

class Hero extends Component {
	render () {
		return (
			<div className={styles.hero}>
				<div className={styles.heroSectionText}>
					<h1>Header</h1>
					<h5>subtitle about anything you like</h5>
				</div>
			</div>
		)
	}
}

export default Hero