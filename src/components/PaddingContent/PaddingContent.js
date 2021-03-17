import React from 'react'
import './PaddingContent.css'

export const PaddingContent = ({ children }) => {
	return (
		<div
			className='padding-content'
			style={{
				paddingTop: '75px',
				paddingLeft: '250px',
				paddingRight: '30px',
				height: '100vh',
				boxSizing: 'border-box',
			}}
		>
			{children}
		</div>
	)
}
