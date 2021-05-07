import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPagelines } from '@fortawesome/free-brands-svg-icons'
import BirdVideo from 'assets/ari-bird/Ari-bird.mp4'
import BirdPoster from 'assets/ari-bird/Ari-bird.jpg'
import { Player, ControlBar, VolumeMenuButton } from 'video-react'
import { Message as MessageMobile } from 'pages/Aggregator/component'
import {
	useGetScore,
	useGetGamers,
	usePlayFlappyBird,
	onFilterGamers,
	useFindRank,
} from 'queries/useGamer'
import { Message, MessageEnough, MessageBuy } from './components'
import { SpinnerButton } from 'components'
import { useRequestSend } from 'queries/useRequest'
import PrizesIcon from 'assets/ari-bird/PrizeIcon.png'
import BgText from 'assets/ari-bird/ari bird/head.png'
import RankImg from 'assets/rank-img.png'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import FirstBlood from 'assets/ari-bird/4.png'
import TripleKill from 'assets/ari-bird/1.png'
import Rampage from 'assets/ari-bird/2.png'
import GodLike from 'assets/ari-bird/3.png'
import './FlappyBird.css'
const PrizesData = [
	{
		rank: '1',
		tier: GodLike,
		ari_prizes: '4000 ARI',
	},
	{
		rank: '2',
		tier: Rampage,
		ari_prizes: '2000 ARI',
	},
	{
		rank: '3',
		tier: TripleKill,
		ari_prizes: '1000 ARI',
	},
	{
		rank: '4 ~ 10',
		tier: FirstBlood,
		ari_prizes: '100 ARI',
	},
]

export const FlappyBird = () => {
	const wallet = useWallet()
	const [isNotEnough, setIsNotEnough] = React.useState(false)
	const [buyError, setBuyError] = React.useState(false)
	const [isOpenBuy, setIsOpenBuy] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(false)
	const requestSend = useRequestSend(setIsLoading, setBuyError)
	const { data: score } = useGetScore()
	const { data: gamers } = useGetGamers()
	const playGame = usePlayFlappyBird(setIsNotEnough)
	const rank = useFindRank()
	if (window.screen.width > 700) {
		return (
			<div className=' flappy-bird card'>
				{buyError ? <Message onClose={() => setBuyError(false)} /> : null}
				{isNotEnough ? <MessageEnough onClose={() => setIsNotEnough(false)} /> : null}
				{isOpenBuy ? (
					<MessageBuy
						onClose={() => {
							setIsOpenBuy(false)
							setIsLoading(false)
						}}
						setIsLoading={setIsLoading}
						requestSend={requestSend}
					/>
				) : null}
				<div className='box box-1'>
					<div className='box-content'>
						<Player
							// fluid={false}
							// height={500}
							// width={300}
							playsInline
							aspectRatio='4:3'
							loop
							muted
							autoPlay
							src={BirdVideo}
							poster={BirdPoster}
						>
							<ControlBar autoHide={false} disableDefaultControls>
								<VolumeMenuButton />
								<VolumeMenuButton vertical />
							</ControlBar>
						</Player>
					</div>
					<div className='container-btn'>
						<FontAwesomeIcon icon={faPagelines} className='icon icon-left' />
						{wallet.status !== 'connected' ? (
							<div onClick={() => wallet.connect()} className='btn-primary'>
								Unlock Wallet
							</div>
						) : (
							<div className='btn-container'>
								<div
									onClick={() => playGame()}
									className={`btn-primary btn-play  ${isLoading ? 'loading' : ''}`}
								>
									Let's play
								</div>
								<div
									id='btn-buy-turn'
									onClick={() => {
										setIsOpenBuy(true)
										setIsLoading(true)
									}}
									className={`btn-primary btn-buy ${isLoading ? 'loading' : ''}`}
								>
									{!isLoading ? 'Buy turn' : <SpinnerButton />}
								</div>
							</div>
						)}
						<FontAwesomeIcon icon={faPagelines} className='icon icon-right' />
					</div>
				</div>
				<div className='box box-2'>
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
					<div className='header-below'>
						<div className='bg-with-text'>
							<img src={BgText} alt='Background text' />
							<span className='txt'>Ranking</span>
						</div>
					</div>
				</div>
				<div className='box box-3'>
					<div className='box-3-content'>
						<div className='rank-score'>
							<img src={RankImg} alt='rank' />
							<div className='score'>
								<span className='value'>
									<b>{gamers ? gamers[1].highest_score : 0}</b> <br /> Score
								</span>
								<span className='value'>
									<b>{gamers ? gamers[0].highest_score : 0}</b> <br /> Score
								</span>
								<span className='value'>
									<b>{gamers ? gamers[2].highest_score : 0}</b> <br /> Score
								</span>
							</div>
						</div>
						<div className='table-score'>
							<div className='table-header'>
								<h1>Top Score</h1>
								<span className='extra'>Since start of competition</span>
							</div>
							<table>
								<thead>
									<tr>
										<th>RANK</th>
										<th>SCORE</th>
										<th>ADDRESS</th>
									</tr>
								</thead>
								<tbody>
									{onFilterGamers(gamers).map((item, index) => (
										<tr>
											<td className='rank'>
												{'#'}
												{index + 1}
											</td>
											<td className='score-value'>{item?.highest_score || ''}</td>
											<td className='address'>
												{item?.address
													? item?.address?.substr(0, 4) +
													  '...' +
													  item?.address?.substr(item?.address?.length - 4, item?.address?.length)
													: ''}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
					<div className='header-below'>
						<div className='bg-with-text'>
							<img src={PrizesIcon} alt='Prizes Icon' className='icon' />
							<img src={BgText} alt='Background text' />
							<span className='txt'>Prizes</span>
						</div>
					</div>
				</div>
				<div className='box box-4'>
					<div className='box-4-content'>
						<div className='table-score'>
							<div className='table-header'>
								<h1>Weekly Prize</h1>
								<span className='extra'>Higher score - higher rank</span>
							</div>
							<table>
								<thead>
									<tr>
										<th>RANK</th>
										<th>TIER</th>
										<th>ARI PRIZES</th>
									</tr>
								</thead>
								<tbody>
									{PrizesData.map((item, index) => (
										<tr>
											<td className='rank'>{item.rank}</td>
											<td className='tier'>
												<img src={item.tier} alt='tier' />
											</td>
											<td className='prizes'>{item.ari_prizes}</td>
										</tr>
									))}
								</tbody>
							</table>
							<div className='txt-extra'>
								<b>Top players in 8 weeks will receive NFTs rewards with the following prizes:</b>{' '}
								<br /> 1: 1 Legend NFT <br /> 2: 1 Epic NFT <br /> 3: 1 Rare NFT <br /> 4 ~ 10: 7
								rare NFTs
							</div>
						</div>
						<div className='txt-frame'>
							<span className='txt'>
								Eligible participants will win prizes at the end of every week.
							</span>
							<span className='txt-heading'>
								The more points you achieve, the higher your ranking is, and the bigger the prizes
								are!
							</span>
							<span className='txt'>
								The winners will be top participants on the leaderboard with the highest scores by
								the end of every week.
							</span>
							<div className='container-img'>
								{PrizesData.map((item) => (
									<img src={item.tier} alt='tier' />
								))}
							</div>
						</div>
					</div>
					{/* <div className='header-below'>
						<div className='bg-with-text'>
							<img src={BgText} alt='Background text' />
							<span className='txt'>Rules</span>
						</div>
					</div> */}
				</div>
				{/* <div className='box box-5'></div> */}
			</div>
		)
	}
	return <MessageMobile />
}
