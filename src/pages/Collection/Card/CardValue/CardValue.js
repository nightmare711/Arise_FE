import React from 'react'
import { Player, ControlBar, VolumeMenuButton } from 'video-react'

import './CardValue.css'

export const CardValue = ({ title, image, scarcity, video }) => {
	return (
		<div className='card-value-collection'>
			<Player
				// fluid={false}
				// height={500}
				// width={300}
				playsInline
				loop
				muted
				autoPlay
				poster={image}
				src={video}
			>
				<ControlBar autoHide={false} disableDefaultControls>
					<VolumeMenuButton />
					<VolumeMenuButton vertical />
				</ControlBar>
			</Player>

			<span className='title'>{title}</span>
			<span className={`scarcity-level`} style={{ color: scarcity.color }}>
				{scarcity.level}
			</span>
		</div>
	)
}
