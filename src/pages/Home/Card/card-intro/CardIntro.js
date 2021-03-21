import React from 'react'
import Intro from 'assets/intro.png'
import './CardIntro.css'

export const CardIntro = () => {
	return (
		<div className='card card-intro'>
			<img src={Intro} className='img-intro' alt='intro' />
		</div>
	)
}
