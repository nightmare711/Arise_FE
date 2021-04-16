import React from 'react'

export const CardBanner = ({ desktopView, mobileView }) => {
	return (
		<div className='card card-intro'>
			<img
				onClick={() => window.open('https://bscstarter.finance/#/pool/46', '_blank')}
				style={{ borderRadius: '20px', cursor: 'pointer' }}
				src={window.screen.width > 520 ? desktopView : mobileView}
				className='img-intro'
				alt='banner'
			/>
		</div>
	)
}
