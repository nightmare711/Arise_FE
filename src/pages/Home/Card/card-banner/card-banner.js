import React from 'react'

export const CardBanner = ({ desktopView, mobileView }) => {
	return (
		<div className='card card-intro'>
			<img
				onClick={() => {
					if (desktopView !== mobileView) {
						window.open(
							'https://unicrypt.network/amm/pancake/ilo/0xed073C4887cC2a1cD0CCbb8527F705a8c91b2b7D',
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
