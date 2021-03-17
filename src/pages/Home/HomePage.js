import React from 'react'
import { CardIntro, CardSale, CardInfo, CardSecureInfo, CardRoadmap, CardExtendInfo } from './Card'
import './Homepage.css'

export const HomePage = () => {
	return (
		<div className='home-page'>
			<CardIntro />
			<CardSale />
			<CardInfo />
			<CardSecureInfo />
			<CardRoadmap />
			<CardExtendInfo />
		</div>
	)
}
