import React from 'react'
import { Player, ControlBar, VolumeMenuButton } from 'video-react'
import NFTsVideo from 'assets/NFTs/NFTs.mp4'
import { Link } from 'react-router-dom'
import './CardVideo.css'

export const CardVideo = () => {
	return (
		<div className='card card-video'>
			<Link to='/my-collection'>
				<Player
					// fluid={false}
					// height={500}
					// width={300}
					playsInline
					aspectRatio='4:3'
					loop
					muted
					autoPlay
					src={NFTsVideo}
				>
					<ControlBar autoHide={false} disableDefaultControls>
						<VolumeMenuButton />
						<VolumeMenuButton vertical />
					</ControlBar>
				</Player>
			</Link>
		</div>
	)
}
