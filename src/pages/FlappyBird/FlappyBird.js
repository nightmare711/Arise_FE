import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPagelines } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import BirdVideo from 'assets/ari-bird/Ari-bird.mp4'
import BirdPoster from 'assets/ari-bird/Ari-bird.jpg'
import { Player, ControlBar, VolumeMenuButton } from 'video-react'
import { useGetScore, useGetGamers, usePlayFlappyBird, onFilterGamers } from 'queries/useGamer'
import { Message, MessageEnough } from './components'
import { SpinnerButton } from 'components'
import { useRequestSend } from 'queries/useRequest'
import PrizesIcon from 'assets/ari-bird/PrizeIcon.png'
import BgText from 'assets/bg-text.png'
import RankImg from 'assets/rank-img.png'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import './FlappyBird.css'
const PrizesData = [
	{
		rank: '1',
		tier: (
			<svg
				viewBox='0 0 25 25'
				color='text'
				width='20px'
				xmlns='http://www.w3.org/2000/svg'
				className='sc-bdvvaa eomlrw'
			>
				<path
					d='M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z'
					fill='#FFD800'
				></path>
				<path
					d='M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z'
					fill='#FFD800'
				></path>
				<path
					d='M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z'
					fill='#FFAF00'
				></path>
				<path
					d='M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z'
					fill='#FFAF00'
				></path>
				<ellipse cx='12.5259' cy='14.0971' rx='8.89606' ry='8.22211' fill='#EB8C00'></ellipse>
				<ellipse
					rx='8.69974'
					ry='8.36325'
					transform='matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)'
					fill='#FFD800'
				></ellipse>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z'
					fill='#FEED8D'
				></path>
				<ellipse
					rx='6.64749'
					ry='6.39038'
					transform='matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)'
					fill='#FFC700'
				></ellipse>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z'
					fill='#FFAF00'
				></path>
				<path
					d='M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z'
					fill='#EB8C00'
				></path>
				<path
					d='M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z'
					fill='#EB8C00'
				></path>
			</svg>
		),
		ari_prizes: '21,2000',
	},
	{
		rank: '2 ~ 10',
		tier: (
			<svg
				viewBox='0 0 25 25'
				color='text'
				width='20px'
				xmlns='http://www.w3.org/2000/svg'
				className='sc-bdvvaa eomlrw'
			>
				<path
					d='M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z'
					fill='#C0C4C6'
				></path>
				<path
					d='M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z'
					fill='#C0C4C6'
				></path>
				<path
					d='M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z'
					fill='#7D7D7D'
				></path>
				<path
					d='M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z'
					fill='#7D7D7D'
				></path>
				<ellipse cx='12.5259' cy='14.0971' rx='8.89606' ry='8.22211' fill='#969696'></ellipse>
				<ellipse
					rx='8.69974'
					ry='8.36325'
					transform='matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)'
					fill='#C0C4C6'
				></ellipse>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z'
					fill='#D8D8D8'
				></path>
				<ellipse
					rx='6.64749'
					ry='6.39038'
					transform='matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)'
					fill='#B2B2B2'
				></ellipse>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z'
					fill='#969696'
				></path>
				<path
					d='M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z'
					fill='#7D7D7D'
				></path>
				<path
					d='M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z'
					fill='#7D7D7D'
				></path>
			</svg>
		),
		ari_prizes: '21,2000',
	},
	{
		rank: '11 ~ 100',
		tier: (
			<svg
				viewBox='0 0 25 25'
				color='text'
				width='20px'
				xmlns='http://www.w3.org/2000/svg'
				className='sc-bdvvaa eomlrw'
			>
				<path
					d='M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z'
					fill='#F6AF5B'
				></path>
				<path
					d='M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z'
					fill='#F6AF5B'
				></path>
				<path
					d='M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z'
					fill='#AE5714'
				></path>
				<path
					d='M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z'
					fill='#AE5714'
				></path>
				<ellipse cx='12.5259' cy='14.0971' rx='8.89606' ry='8.22211' fill='#E17A2F'></ellipse>
				<ellipse
					rx='8.69974'
					ry='8.36325'
					transform='matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)'
					fill='#F6AF5B'
				></ellipse>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z'
					fill='#F7D29B'
				></path>
				<ellipse
					rx='6.64749'
					ry='6.39038'
					transform='matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)'
					fill='#E7974D'
				></ellipse>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z'
					fill='#E17A2F'
				></path>
				<path
					d='M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z'
					fill='#AE5714'
				></path>
				<path
					d='M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z'
					fill='#AE5714'
				></path>
			</svg>
		),
		ari_prizes: '21,2000',
	},
	{
		rank: '101 ~ 500',
		tier: (
			<svg
				viewBox='0 0 25 25'
				color='text'
				width='20px'
				xmlns='http://www.w3.org/2000/svg'
				className='sc-bdvvaa eomlrw'
			>
				<path
					d='M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z'
					fill='#9A6AFF'
				></path>
				<path
					d='M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z'
					fill='#9A6AFF'
				></path>
				<path
					d='M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z'
					fill='#A880FD'
				></path>
				<path
					d='M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z'
					fill='#A880FD'
				></path>
				<ellipse cx='12.5259' cy='14.0971' rx='8.89606' ry='8.22211' fill='#7645D9'></ellipse>
				<ellipse
					rx='8.69974'
					ry='8.36325'
					transform='matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)'
					fill='#9A6AFF'
				></ellipse>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z'
					fill='#CAB3F8'
				></path>
				<ellipse
					rx='6.64749'
					ry='6.39038'
					transform='matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)'
					fill='#8F5BFD'
				></ellipse>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z'
					fill='#7645D9'
				></path>
				<path
					d='M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z'
					fill='#452A7A'
				></path>
				<path
					d='M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z'
					fill='#452A7A'
				></path>
			</svg>
		),
		ari_prizes: '21,2000',
	},
	{
		rank: '501+',
		tier: (
			<svg
				viewBox='0 0 25 25'
				color='text'
				width='20px'
				xmlns='http://www.w3.org/2000/svg'
				className='sc-bdvvaa eomlrw'
			>
				<path
					d='M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z'
					fill='#53DEE9'
				></path>
				<path
					d='M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z'
					fill='#53DEE9'
				></path>
				<path
					d='M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z'
					fill='#1FC7D4'
				></path>
				<path
					d='M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z'
					fill='#1FC7D4'
				></path>
				<ellipse cx='12.5259' cy='14.0971' rx='8.89606' ry='8.22211' fill='#0098A1'></ellipse>
				<ellipse
					rx='8.69974'
					ry='8.36325'
					transform='matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)'
					fill='#53DEE9'
				></ellipse>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0022L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z'
					fill='#84F0F9'
				></path>
				<ellipse
					rx='6.64749'
					ry='6.39038'
					transform='matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)'
					fill='#1FC7D4'
				></ellipse>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z'
					fill='#0098A1'
				></path>
				<path
					d='M9.95096 14.0798C9.03126 14.1218 8.69439 13.361 8.65076 12.4055C8.60713 11.4501 8.87326 10.6617 9.79296 10.6197C10.7127 10.5777 11.0495 11.3385 11.0932 12.294C11.1368 13.2495 10.8707 14.0378 9.95096 14.0798Z'
					fill='#017178'
				></path>
				<path
					d='M15.1199 14.0803C14.2002 14.1223 13.8633 13.3615 13.8197 12.406C13.7761 11.4505 14.0422 10.6622 14.9619 10.6202C15.8816 10.5782 16.2185 11.339 16.2621 12.2945C16.3057 13.25 16.0396 14.0383 15.1199 14.0803Z'
					fill='#017178'
				></path>
			</svg>
		),
		ari_prizes: '21,2000',
	},
]

export const FlappyBird = () => {
	const wallet = useWallet()
	const [isNotEnough, setIsNotEnough] = React.useState(false)
	const [buyError, setBuyError] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(false)
	const requestSend = useRequestSend(setIsLoading, setBuyError)
	const { data: score } = useGetScore()
	const { data: gamers } = useGetGamers()
	const playGame = usePlayFlappyBird(setIsNotEnough)
	return (
		<div className=' flappy-bird card'>
			{buyError ? <Message onClose={() => setBuyError(false)} /> : null}
			{isNotEnough ? <MessageEnough onClose={() => setIsNotEnough(false)} /> : null}
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
							<Link to='/ari-bird/game'>
								<div
									onClick={() => playGame()}
									className={`btn-primary btn-play  ${isLoading ? 'loading' : ''}`}
								>
									Let's play
								</div>
							</Link>
							<div
								id='btn-buy-turn'
								onClick={() => {
									setIsLoading(true)
									requestSend()
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
					<div className='frame frame-left'>
						<span className='score-value'>{score?.highest_score || 0}</span>
						<span className='rank-value'>Highest Score</span>
					</div>
					<div className='frame frame-right'>
						<span className='score-value'>{score?.amount || 0}</span>
						<span className='rank-value'>Remaining Turns</span>
					</div>
				</div>
				<div className='header-below'>
					<div className='bg-with-text'>
						<img src={BgText} alt='Background text' />
						<span className='txt'>Team rank</span>
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
										<td className='score-value'>{item.highest_score}</td>
										<td className='address'>
											{item.address.substr(0, 4) +
												'...' +
												item.address.substr(item.address.length - 4, item.address.length)}
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
							<h1>Prizes by Team</h1>
							<span className='extra'>Higher trading score = higher rank!</span>
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
										<td className='tier'>{item.tier}</td>
										<td className='prizes'>{item.ari_prizes}</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className='txt-extra'>
							Prizes to be distributed in CAKE and shared by all members of a tier. CAKE price in
							USD to be determined on the day of distribution. Details below.
						</div>
					</div>
					<div className='txt-frame'>
						<span className='txt'>
							Every eligible participant will win prizes at the end of the competition.
						</span>
						<span className='txt-heading'>
							The better your team performs, the better the prizes!
						</span>
						<span className='txt'>
							The final winning team will be the team with the highest total combined volume of
							their top 500 members at the end of the competition period.
						</span>
					</div>
				</div>
				<div className='header-below'>
					<div className='bg-with-text'>
						<img src={BgText} alt='Background text' />
						<span className='txt'>Rules</span>
					</div>
				</div>
			</div>
			<div className='box box-5'></div>
		</div>
	)
}
