import React from 'react'
import Intro from 'assets/intro.png'
import IntroMobile from 'assets/intro-mobile.png'

import './CardIntro.css'

export const CardIntro = () => {
	return (
		<div className='card card-intro'>
			<img
				src={window.screen.width > 520 ? Intro : IntroMobile}
				className='img-intro'
				alt='intro'
			/>
		</div>
	)
}
