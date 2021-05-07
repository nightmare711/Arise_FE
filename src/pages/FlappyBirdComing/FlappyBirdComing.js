import React from 'react'
import ComingSoon from 'assets/ari-bird/coming-soon.jpeg'
import ComingSoonMobile from 'assets/ari-bird/coming-soon-mobile.jpeg'
import { PasswordOverlay } from 'pages/FlappyBird/components'
import { Countdown } from 'components'
import { DataContext } from 'contexts/DataContext'
import './FlappyBirdComing.css'
export const FlappyBirdComing = () => {
	const data = React.useContext(DataContext)
	if (window.screen.width > 520) {
		return (
			<div className='flappy-bird-coming'>
				{data.countClick >= 5 ? <PasswordOverlay /> : null}
				<img src={ComingSoon} alt='Coming soon' />
				<div onClick={() => data.setCountClick(data.countClick + 1)} className='count-down'>
					<Countdown />
				</div>
			</div>
		)
	}
	return (
		<div className='flappy-bird-coming'>
			<img src={ComingSoonMobile} alt='Coming soon' />
			<div className='count-down'>
				<Countdown />
			</div>
		</div>
	)
}
