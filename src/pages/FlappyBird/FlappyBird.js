import React from 'react'
import ComingSoon from 'assets/ari-bird/coming-soon.jpeg'
import ComingSoonMobile from 'assets/ari-bird/coming-soon-mobile.jpeg'
import { Countdown } from 'components'
import './FlappyBird.css'
export const FlappyBird = () => {
	if (window.screen.width > 520) {
		return (
			<div className='flappy-bird'>
				<img src={ComingSoon} alt='Coming soon' />
				<div className='count-down'>
					<Countdown />
				</div>
			</div>
		)
	}
	return (
		<div className='flappy-bird'>
			<img src={ComingSoonMobile} alt='Coming soon' />
			<div className='count-down'>
				<Countdown />
			</div>
		</div>
	)
}
