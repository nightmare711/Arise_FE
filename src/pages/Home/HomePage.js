import React from 'react'
import {
	CardIntro,
	CardInfo,
	CardSecureInfo,
	CardRoadmap,
	CardExtendInfo,
	CardBug,
	CardCopyRight,
	CardBanner,
} from './Card'
import Percent from 'assets/percent.jpg'
import BannerMobile from 'assets/banner-mobile.png'
import Banner from 'assets/banner.png'
import './Homepage.css'

export const HomePage = () => {
	return (
		<div className='home-page'>
			<CardIntro />
			{/* <CardSale /> */}
			<CardBanner desktopView={Banner} mobileView={BannerMobile} />
			<CardInfo />
			<CardBug />
			<CardSecureInfo />
			<CardRoadmap />
			<CardExtendInfo />
			{/* <CardChart />
			<CardUsage /> */}
			<CardBanner desktopView={Percent} mobileView={Percent} />
			<CardCopyRight />
		</div>
	)
}
