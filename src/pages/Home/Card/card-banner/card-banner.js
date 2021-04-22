import React from 'react'

export const CardBanner = ({ desktopView, mobileView }) => {
	return (
		<div className='card card-intro'>
			<img
				onClick={() => {
					if (desktopView !== mobileView) {
						window.open(
							'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xa861f33d8ac80b64c1b8c7b4c99599474b79888a',
							'_blank'
						)
					}
				}}
				style={{ borderRadius: '20px', cursor: 'pointer' }}
				src={window.screen.width > 520 ? desktopView : mobileView}
				className='img-intro'
				alt='banner'
			/>
		</div>
	)
}
