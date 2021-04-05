import React from 'react'
import { ListUsage } from 'constants/list-sidebar'
import './CardUsage.css'

export const CardUsage = () => {
	return (
		<div className='card card-usage'>
			<div className='pie-chart'>
				<div className='overlay-percent'>
					<span className='percent percent-1'>33%</span>
					<span className='percent percent-2'>32%</span>
					<span className='percent percent-3'>20%</span>
					<span className='percent percent-4'>5%</span>
					<span className='percent percent-5'>10%</span>
				</div>
				<div className='total'>
					<b>Total supply:</b> <span>100,000,000</span>
				</div>
			</div>
			<div className='left-txt'>
				<div className='title-primary'>
					<span>TOKEN ALLOCATION CHART</span>
				</div>
				<br />
				<span className='title-extra'>
					Please find below the details about how presale fund will be used
				</span>
				<ul className='list-detail'>
					{ListUsage.map((item, index) => (
						<li key={index} className='item'>
							<div className='color' style={{ backgroundColor: item.color }}></div>
							<span className='detail'>{item.title}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
