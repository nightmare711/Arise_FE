import React from 'react'
import ComingSoon from 'assets/ari-bird/coming-soon.jpeg'
import { Countdown } from 'components'
import './FlappyBird.css'
export const FlappyBird = () => {
	return (
		<div className='flappy-bird'>
			<img src={ComingSoon} alt='Coming soon' />
			<div className='count-down'>
				<Countdown />
			</div>
		</div>
	)
}
