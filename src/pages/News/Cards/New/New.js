import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import './New.css'

export const CardNew = ({ id, type, link, image, title, day }) => {
	return (
		<div className='card-new'>
			<div className='header'>
				<span>
					<ReactTimeAgo date={parseInt(day)} locale='en-US' />
				</span>
				{type === 'news' ? (
					<div className='news'>ARI News</div>
				) : (
					<div className='guide'>Guide</div>
				)}
			</div>
			<img src={image || 'https://picsum.photos/200'} alt='News' />
			<span className='title-primary'>{title}</span>
			<div className='btn-container'>
				{/* <div className='btn-primary-trans'>View</div> */}
				<div onClick={() => window.open(link, '_blank')} className='btn-secondary-trans'>
					Read on Medium
				</div>
			</div>
		</div>
	)
}
