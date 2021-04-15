import React from 'react'
import { useClickOverlay } from 'services/UI/useDevelopUI'
import './Overlay.css'

export const Overlay = ({ children, transparent }) => {
	const onHandleClickOverlay = useClickOverlay()
	return (
		<div
			style={
				transparent
					? {
							backgroundColor: 'transparent',
					  }
					: {}
			}
			onClick={onHandleClickOverlay}
			className='overlay'
		>
			{children}
		</div>
	)
}
