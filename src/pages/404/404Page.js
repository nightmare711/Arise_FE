import React from 'react'
import { CardCopyRight } from 'pages/Home/Card'
import Rocket from 'assets/rocket.png'
import './404Page.css'

export const ErrorPage = () => {
	return (
		<div className='error-page'>
			<div className='error-panel'>
				<img src={Rocket} alt='rocket' />
				<span>We are working on something big.</span>
				<h1 className='text'>ARE YOU READY ?</h1>
			</div>
			<CardCopyRight />
		</div>
	)
}
