import React from 'react'
import './SpinnerButton.css'

export function SpinnerButton() {
	return (
		<div className='lds-ripple'>
			<div></div>
			<div></div>
		</div>
	)
}
