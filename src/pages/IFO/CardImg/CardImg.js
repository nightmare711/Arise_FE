import React from 'react'
import './CardImg.css'

export const CardImg = ({ src, id, href }) => {
	return (
		<div
			style={id === 1 ? { cursor: 'pointer' } : {}}
			onClick={() => (id === 1 ? window.open(href, '_blank') : {})}
			className='card-img'
		>
			<img src={src} alt='Replace' />
		</div>
	)
}
