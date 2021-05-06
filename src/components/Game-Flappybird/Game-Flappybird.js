/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { DataContext } from 'contexts/DataContext'
import './Game-Flappybird.css'

export const GameFlappyBird = () => {
	const data = React.useContext(DataContext)
	React.useEffect(() => {
		try {
			setInterval(match, 100)
			function match() {
				document.getElementById('flappy-bird').contentWindow.focus()
			}
		} catch {}
	}, [data.isOpenFlappyBird])
	return (
		<div className='game-flappybird'>
			<iframe
				id='flappy-bird'
				src={`https://ancient-bastion-60390.herokuapp.com/?${window.ethereum.selectedAddress}`}
			/>
		</div>
	)
}
