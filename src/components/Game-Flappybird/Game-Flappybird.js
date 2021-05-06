/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { DataContext } from 'contexts/DataContext'
import { encrypt } from 'services/utils/crypto'
import './Game-Flappybird.css'
import { AUTH } from 'constants/Secret'

export const GameFlappyBird = () => {
	const data = React.useContext(DataContext)

	React.useEffect(() => {
		let t = setInterval(machet, 100)
		function machet() {
			//alert("machet");
			document.getElementById('flappy-bird').contentWindow.focus()
		}
		return () => clearInterval(t)
	}, [data.isOpenFlappyBird])
	return (
		<div className='game-flappybird'>
			<div onClick={() => data.setIsOpenFlappyBird(false)} className='overlay'></div>
			<iframe
				name={encrypt({
					address: window.ethereum.selectedAddress,
					info: AUTH,
				})}
				id='flappy-bird'
				src='https://ancient-bastion-60390.herokuapp.com/'
			/>
		</div>
	)
}
