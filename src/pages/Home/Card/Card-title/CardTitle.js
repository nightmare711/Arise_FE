import React from 'react'
import './CardTitle.css'

export const CardTitle = () => {
	return (
		<div className='card card-title'>
			<span>ARI PRICE CHART</span>
			<span className='content'>
				Price from chart and price ticker above may show some difference due to data sync.
			</span>
		</div>
	)
}
