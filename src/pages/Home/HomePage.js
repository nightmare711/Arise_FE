import React from 'react'
import {
	CardIntro,
	CardInfo,
	CardSecureInfo,
	CardRoadmap,
	CardExtendInfo,
	CardChart,
	CardBug,
	CardCopyRight,
	CardUsage,
	CardBanner,
} from './Card'
import './Homepage.css'

export const HomePage = () => {
	return (
		<div className='home-page'>
			<CardIntro />
			{/* <CardSale /> */}
			<CardBanner />
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
