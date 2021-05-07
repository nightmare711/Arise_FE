/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { DataContext } from 'contexts/DataContext'
import { useGetScore, useFindRank } from 'queries/useGamer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Game-Flappybird.css'

export const GameFlappyBird = () => {
	const data = React.useContext(DataContext)
	const { data: score } = useGetScore()
	const rank = useFindRank()
	React.useEffect(() => {
		let t = setInterval(match, 100)
		function match() {
			try {
				document.getElementById('flappy-bird').contentWindow.focus()
			} catch {}
		}
		return () => clearInterval(t)
	}, [data.isOpenFlappyBird])
	return (
		<div className='game-flappybird'>
			<div className='btn-home'>
				<Link to='/'>
					<FontAwesomeIcon className='icon' icon={faHome} />
				</Link>
			</div>
			<iframe
				id='flappy-bird'
				src={`https://ancient-bastion-60390.herokuapp.com/?${window.ethereum.selectedAddress}`}
			/>
			<div className='score'>
				<div className='score-row'>
					<div className='frame frame-left'>
						<span className='score-value'>{score?.highest_score || 0}</span>
						<span className='rank-value'>Highest Score</span>
					</div>
					<div className='frame frame-right'>
						<span className='score-value'>{score?.amount || 0}</span>
						<span className='rank-value'>Remaining Turns</span>
					</div>
				</div>
				<span className='rank-value'>
					Rank: <b>#{rank}</b>
				</span>
			</div>
		</div>
	)
}
