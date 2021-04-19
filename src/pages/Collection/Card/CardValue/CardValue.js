import React from 'react'
import { Player } from 'video-react'

import './CardValue.css'

export const CardValue = ({ title, image, scarcity, video }) => {
	return (
		<div className='card-value-collection'>
			<Player
				// fluid={false}
				// height={500}
				// width={300}
				playsInline
				aspectRatio='4:3'
				loop
				muted
				autoPlay
				poster={image}
				src={video}
			/>
			<span className='title'>{title}</span>
			<span className={`scarcity-level`} style={{ color: scarcity.color }}>
				{scarcity.level}
			</span>
		</div>
	)
}
