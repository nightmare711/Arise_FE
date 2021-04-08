import React from 'react'
import Banner from 'assets/banner.jpg'
import BannerMobile from 'assets/banner-mobile.jpg'

export const CardBanner = () => {
	return (
		<div className='card card-intro'>
			<img
				onClick={() =>
					window.open(
						'https://arise-finance.medium.com/private-sale-for-arise-enthusiasts-3e0d68415a38',
						'_blank'
					)
				}
				style={{ borderRadius: '20px', cursor: 'pointer' }}
				src={window.screen.width > 520 ? Banner : BannerMobile}
				className='img-intro'
				alt='banner'
			/>
		</div>
	)
}
