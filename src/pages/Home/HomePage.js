import React from 'react'
import {
	CardIntro,
	CardSale,
	CardInfo,
	CardSecureInfo,
	CardRoadmap,
	CardExtendInfo,
	CardChart,
} from './Card'
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
			<CardChart />
		</div>
	)
}
