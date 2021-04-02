import React from 'react'
import {
	CardIntro,
	CardSale,
	CardInfo,
	CardSecureInfo,
	CardRoadmap,
	CardExtendInfo,
	CardChart,
	CardBug,
	CardCopyRight,
	CardUsage,
} from './Card'
import './Homepage.css'

export const HomePage = () => {
	return (
		<div className='home-page'>
			<CardIntro />
			<CardSale />
			<CardInfo />
			<CardBug />
			<CardSecureInfo />
			<CardRoadmap />
			<CardExtendInfo />
			<CardChart />
			<CardUsage />
			<CardCopyRight />
		</div>
	)
}
