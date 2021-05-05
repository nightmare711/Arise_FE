import React from 'react'
import {
	CardIntro,
	CardInfo,
	CardRoadmap,
	CardExtendInfo,
	CardCopyRight,
	CardBanner,
	CardTitle,
	CardPriceChart,
	CardVideo,
} from './Card'
import NFTsVideo from 'assets/NFTs/NFTs.mp4'
import Poster from 'assets/NFTs/Poster.jpg'
import Percent from 'assets/percent.jpg'
// import BannerMobile from 'assets/banner-mobile.png'
// import Banner from 'assets/banner.png'
import './Homepage.css'

export const HomePage = () => {
	return (
		<div className='home-page'>
			<CardIntro />
			{/* <CardSale /> */}
			{/* <CardBanner desktopView={Banner} mobileView={BannerMobile} /> */}
			<CardInfo />
			<CardTitle />
			<CardPriceChart />
			<CardVideo video={NFTsVideo} poster={Poster} />
			<CardRoadmap />
			<CardExtendInfo />
			{/* <CardChart />
			<CardUsage /> */}
			<CardBanner desktopView={Percent} mobileView={Percent} />
			<CardCopyRight />
		</div>
	)
}
